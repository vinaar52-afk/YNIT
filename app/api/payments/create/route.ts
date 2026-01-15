import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerClient } from '@/lib/supabase';

/**
 * POST /api/payments/create
 * Creates a Xendit invoice for an order
 * 
 * Request body:
 * {
 *   orderId: string - The order ID to create payment for
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const bodySchema = z.object({
      orderId: z.string().trim().min(1, 'Order ID is required'),
    });

    const parsed = bodySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, data: null, error: parsed.error.errors[0]?.message ?? 'Invalid request body' },
        { status: 400 }
      );
    }

    const { orderId } = parsed.data;

    const authHeader = request.headers.get('authorization') || '';
    const accessToken = authHeader.toLowerCase().startsWith('bearer ')
      ? authHeader.slice(7).trim()
      : '';

    if (!accessToken) {
      return NextResponse.json(
        { success: false, data: null, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get the authenticated user from Supabase
    const supabase = createServerClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return NextResponse.json(
        { success: false, data: null, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Fetch the order from Supabase
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*, order_items(*)')
      .eq('id', orderId)
      .eq('user_id', user.id)
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        { success: false, data: null, error: 'Order not found' },
        { status: 404 }
      );
    }

    if (typeof order.total_amount !== 'number' || order.total_amount <= 0) {
      return NextResponse.json(
        { success: false, data: null, error: 'Order amount is invalid' },
        { status: 400 }
      );
    }

    // Check if order is already paid
    if (order.status === 'paid' || order.status === 'completed') {
      return NextResponse.json(
        { success: false, data: null, error: 'Order already paid' },
        { status: 400 }
      );
    }

    // Get Xendit API key from environment
    const xenditApiKey = process.env.XENDIT_API_KEY;

    if (!xenditApiKey) {
      console.error('XENDIT_API_KEY not configured');
      return NextResponse.json(
        { success: false, data: null, error: 'Payment system not configured' },
        { status: 500 }
      );
    }

    // Create Xendit invoice
    const xenditResponse = await fetch('https://api.xendit.co/v2/invoices', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(xenditApiKey + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        external_id: orderId,
        amount: order.total_amount,
        payer_email: user.email,
        description: `Pembayaran untuk order ${orderId}`,
        invoice_duration: 86400, // 24 hours
        currency: 'IDR',
        success_redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/pesanan-saya?payment=success`,
        failure_redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'}/pesanan-saya?payment=failed`,
      }),
    });

    if (!xenditResponse.ok) {
      const errorData = await xenditResponse.json();
      console.error('Xendit API error:', errorData);
      return NextResponse.json(
        { success: false, data: null, error: 'Failed to create payment invoice' },
        { status: 500 }
      );
    }

    const xenditData = await xenditResponse.json();

    // Update order with payment_id
    const { error: updateError } = await supabase
      .from('orders')
      .update({ payment_id: xenditData.id })
      .eq('id', orderId)
      .eq('user_id', user.id);

    if (updateError) {
      console.error('Failed to update order payment_id:', updateError);
      return NextResponse.json(
        { success: false, data: null, error: 'Failed to attach payment to order' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        invoiceUrl: xenditData.invoice_url,
        paymentId: xenditData.id,
      },
      error: null,
    });

  } catch (error: any) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { success: false, data: null, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
