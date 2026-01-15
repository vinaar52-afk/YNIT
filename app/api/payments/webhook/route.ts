import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createServerClient } from '@/lib/supabase';

/**
 * POST /api/payments/webhook
 * Xendit webhook handler for payment status updates
 * 
 * Xendit will send POST requests to this endpoint when payment status changes.
 * We verify the webhook signature and update the order status accordingly.
 * 
 * Setup:
 * 1. Go to Xendit Dashboard > Settings > Webhooks
 * 2. Add webhook URL: https://yourdomain.com/api/payments/webhook
 * 3. Select events: invoice.paid, invoice.expired, invoice.failed
 * 4. Add callback token to .env.local as XENDIT_WEBHOOK_TOKEN
 */
export async function POST(request: NextRequest) {
  try {
    // Get the webhook payload
    const payload = await request.json();
    
    // Verify webhook token (basic security)
    const webhookToken = request.headers.get('x-callback-token');
    const expectedToken = process.env.XENDIT_WEBHOOK_TOKEN;

    if (!expectedToken) {
      console.error('XENDIT_WEBHOOK_TOKEN not configured');
      return NextResponse.json({ success: false, data: null, error: 'Webhook not configured' }, { status: 500 });
    }

    if (webhookToken !== expectedToken) {
      console.error('Invalid webhook token');
      return NextResponse.json({ success: false, data: null, error: 'Unauthorized' }, { status: 401 });
    }

    // Log the webhook for debugging
    console.log('Xendit webhook received:', JSON.stringify(payload, null, 2));
    const payloadSchema = z.object({
      external_id: z.string().trim().min(1, 'Missing external_id'),
      status: z.string().trim(),
      id: z.string().trim().optional(),
    });

    const parsed = payloadSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ success: false, data: null, error: parsed.error.errors[0]?.message ?? 'Invalid payload' }, { status: 400 });
    }

    const { external_id, status, id: paymentId } = parsed.data;

    // Map Xendit status to our order status
    let orderStatus: string;
    
    switch (status) {
      case 'PAID':
      case 'SETTLED':
        orderStatus = 'paid';
        break;
      case 'EXPIRED':
      case 'FAILED':
      case 'VOIDED':
      case 'CANCELLED':
        orderStatus = 'cancelled';
        break;
      default:
        console.log(`Unknown Xendit status: ${status}`);
        return NextResponse.json({ success: true, data: { received: true }, error: null });
    }

    // Update the order in Supabase
    const supabase = createServerClient();

    const { data: order, error: fetchError } = await supabase
      .from('orders')
      .select('*')
      .eq('id', external_id)
      .single();

    if (fetchError || !order) {
      console.error('Order not found:', external_id);
      return NextResponse.json({ success: false, data: null, error: 'Order not found' }, { status: 404 });
    }

    // Update order status
    const { error: updateError } = await supabase
      .from('orders')
      .update({
        status: orderStatus,
        payment_id: paymentId,
        updated_at: new Date().toISOString(),
      })
      .eq('id', external_id);

    if (updateError) {
      console.error('Failed to update order:', updateError);
      return NextResponse.json({ success: false, data: null, error: 'Failed to update order' }, { status: 500 });
    }

    console.log(`Order ${external_id} updated to status: ${orderStatus}`);

    // TODO: Send email notification to customer
    // TODO: Send notification to admin/WhatsApp

    return NextResponse.json({ success: true, data: { received: true }, error: null });

  } catch (error: any) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { success: false, data: null, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/payments/webhook
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      message: 'Xendit webhook endpoint is active',
      timestamp: new Date().toISOString(),
    },
    error: null,
  });
}
