'use client';

import { useState, useEffect } from 'react';
import { supabase } from './supabase';
import type { CartItem } from './useCart';
import type { Order as SupabaseOrder, OrderItem as SupabaseOrderItem } from './supabase';

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'completed' | 'cancelled';
  paymentId?: string;
  createdAt: string;
}

export function useOrders(userId?: string) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    fetchOrders();
  }, [userId]);

  const fetchOrders = async () => {
    if (!userId) return;

    try {
      // Fetch orders with their items
      const { data: ordersData, error: ordersError } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (ordersError) throw ordersError;

      if (ordersData) {
        // Fetch order items for each order
        const ordersWithItems = await Promise.all(
          ordersData.map(async (order: SupabaseOrder) => {
            const { data: itemsData, error: itemsError } = await supabase
              .from('order_items')
              .select('*')
              .eq('order_id', order.id);

            if (itemsError) throw itemsError;

            const items: CartItem[] = (itemsData || []).map((item: SupabaseOrderItem) => ({
              id: item.id,
              tourId: item.tour_id,
              tourName: item.tour_name,
              price: item.price,
              quantity: item.quantity,
              image: item.image,
              type: item.type,
            }));

            return {
              id: order.id,
              items,
              totalAmount: order.total_amount,
              status: order.status as Order['status'],
              paymentId: order.payment_id || undefined,
              createdAt: order.created_at,
            };
          })
        );

        setOrders(ordersWithItems);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createOrder = async (items: CartItem[], totalAmount: number) => {
    if (!userId) {
      return { success: false, error: 'User must be logged in' };
    }

    try {
      // Create order record
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert([
          {
            user_id: userId,
            status: 'pending',
            total_amount: totalAmount,
          },
        ])
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = items.map((item) => ({
        order_id: orderData.id,
        tour_id: item.tourId,
        tour_name: item.tourName,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
        type: item.type,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // Refresh orders list
      await fetchOrders();

      return { success: true, orderId: orderData.id };
    } catch (error: any) {
      console.error('Error creating order:', error);
      return { success: false, error: error.message };
    }
  };

  const updateOrderStatus = async (orderId: string, status: Order['status'], paymentId?: string) => {
    try {
      const updateData: any = { status };
      if (paymentId) {
        updateData.payment_id = paymentId;
      }

      const { error } = await supabase
        .from('orders')
        .update(updateData)
        .eq('id', orderId);

      if (error) throw error;

      await fetchOrders();
      return { success: true };
    } catch (error: any) {
      console.error('Error updating order:', error);
      return { success: false, error: error.message };
    }
  };

  return {
    orders,
    createOrder,
    updateOrderStatus,
    isLoading,
  };
}
