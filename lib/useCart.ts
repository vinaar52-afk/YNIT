'use client';

import { useState, useEffect } from 'react';
import { supabase } from './supabase';
import type { CartItem as SupabaseCartItem } from './supabase';

export interface CartItem {
  id?: string;
  tourId: string;
  tourName: string;
  price: number;
  quantity: number;
  image: string;
  type: 'tour' | 'study' | 'dokumen' | 'medical';
}

export function useCart(userId?: string) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch cart from Supabase when user is logged in
  useEffect(() => {
    if (!userId) {
      setCart([]);
      setIsLoading(false);
      return;
    }

    fetchCart();
  }, [userId]);

  const fetchCart = async () => {
    if (!userId) return;

    try {
      const { data, error } = await supabase
        .from('cart')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;

      if (data) {
        const items: CartItem[] = data.map((item: SupabaseCartItem) => ({
          id: item.id,
          tourId: item.tour_id,
          tourName: item.tour_name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          type: item.type,
        }));
        setCart(items);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (item: Omit<CartItem, 'quantity' | 'id'> & { quantity?: number }) => {
    if (!userId) {
      console.error('User must be logged in to add to cart');
      return { success: false, error: 'Please login first' };
    }

    const qty = item.quantity ?? 1;

    try {
      // Check if item already exists in cart
      const { data: existing } = await supabase
        .from('cart')
        .select('*')
        .eq('user_id', userId)
        .eq('tour_id', item.tourId)
        .single();

      if (existing) {
        // Update quantity
        const { error } = await supabase
          .from('cart')
          .update({ quantity: existing.quantity + qty })
          .eq('id', existing.id);

        if (error) throw error;
      } else {
        // Insert new item
        const { error } = await supabase
          .from('cart')
          .insert([
            {
              user_id: userId,
              tour_id: item.tourId,
              tour_name: item.tourName,
              price: item.price,
              quantity: qty,
              image: item.image,
              type: item.type,
            },
          ]);

        if (error) throw error;
      }

      // Refresh cart
      await fetchCart();
      return { success: true };
    } catch (error: any) {
      console.error('Error adding to cart:', error);
      return { success: false, error: error.message };
    }
  };

  const removeFromCart = async (tourId: string) => {
    if (!userId) return { success: false };

    try {
      const { error } = await supabase
        .from('cart')
        .delete()
        .eq('user_id', userId)
        .eq('tour_id', tourId);

      if (error) throw error;

      await fetchCart();
      return { success: true };
    } catch (error: any) {
      console.error('Error removing from cart:', error);
      return { success: false, error: error.message };
    }
  };

  const clearCart = async () => {
    if (!userId) return { success: false };

    try {
      const { error } = await supabase
        .from('cart')
        .delete()
        .eq('user_id', userId);

      if (error) throw error;

      setCart([]);
      return { success: true };
    } catch (error: any) {
      console.error('Error clearing cart:', error);
      return { success: false, error: error.message };
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    itemCount,
    isLoading,
  };
}
