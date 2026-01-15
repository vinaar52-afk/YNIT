# YNIT Supabase Integration - Complete Setup Guide

## Overview
This document provides step-by-step instructions to set up the YNIT website with Supabase authentication, database, and Xendit payment integration.

## Prerequisites
- Node.js 18+ installed
- A Supabase account (https://supabase.com)
- A Xendit account (https://xendit.co) - for payment processing

---

## Step 1: Supabase Setup

### 1.1 Create Database Tables

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Click **New Query**
4. Copy the entire content of `supabase-schema.sql` file
5. Paste it into the SQL editor
6. Click **Run** to execute the script

This will create:
- `cart` table - Shopping cart items
- `orders` table - Customer orders
- `order_items` table - Individual items in each order
- Row Level Security (RLS) policies - Ensures users can only access their own data
- Automatic timestamp triggers

### 1.2 Verify Tables

1. Go to **Table Editor** in Supabase dashboard
2. Verify these tables exist:
   - cart
   - orders
   - order_items
3. Click on each table and verify the RLS toggle is **enabled** (green)

### 1.3 Configure Email Authentication

1. Go to **Authentication** > **Providers**
2. Ensure **Email** provider is enabled
3. Go to **Authentication** > **Email Templates**
4. Customize the **Confirm Signup** email template if desired
5. (Optional) For testing, you can temporarily disable email confirmation:
   - Go to **Authentication** > **Settings**
   - Toggle off **Enable email confirmations**
   - **Remember to re-enable this for production!**

---

## Step 2: Environment Variables

### 2.1 Frontend (.env.local)

The `.env.local` file has been created with public keys. Now add the private keys:

```bash
# Already configured (DO NOT CHANGE):
NEXT_PUBLIC_SUPABASE_URL=https://vngvhcclxmqshgdsypuy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# ADD THESE MANUALLY:

# 1. Supabase Service Role Key (for server-side operations)
# Get from: Supabase Dashboard > Settings > API > service_role key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# 2. Xendit API Key
# Get from: Xendit Dashboard > Settings > Developers > API Keys
XENDIT_API_KEY=your-xendit-api-key-here

# 3. Xendit Webhook Token
# Generate a random string for security (e.g., use: openssl rand -hex 32)
XENDIT_WEBHOOK_TOKEN=your-random-webhook-token-here

# 4. Base URL (for redirects)
NEXT_PUBLIC_BASE_URL=http://localhost:3001
# In production, change to: https://yourdomain.com
```

### 2.2 How to Get Keys

**Supabase Service Role Key:**
1. Go to Supabase Dashboard
2. Navigate to **Settings** > **API**
3. Find **service_role** key (⚠️ Keep this secret!)
4. Copy and paste into `.env.local`

**Xendit API Key:**
1. Log in to Xendit Dashboard
2. Go to **Settings** > **Developers** > **API Keys**
3. Copy your **Secret Key** (starts with `xnd_...`)
4. Paste into `.env.local`

**Xendit Webhook Token:**
1. Generate a random token:
   ```bash
   openssl rand -hex 32
   ```
2. Copy the output and paste into `.env.local`
3. Save this token - you'll need it for Xendit webhook configuration

---

## Step 3: Xendit Webhook Configuration

### 3.1 Set Up Webhook URL

1. Log in to Xendit Dashboard
2. Go to **Settings** > **Webhooks**
3. Click **Add Webhook**
4. Configure:
   - **Webhook URL**: `https://yourdomain.com/api/payments/webhook`
     - For local testing: Use ngrok or similar tool
     - For production: Use your deployed URL
   - **Events to trigger**:
     - ✓ Invoice Paid
     - ✓ Invoice Expired
     - ✓ Invoice Failed
   - **Callback Token**: Paste the `XENDIT_WEBHOOK_TOKEN` you generated
5. Click **Save**

### 3.2 Test Webhook (Optional)

For local development, use ngrok:
```bash
# Install ngrok
npm install -g ngrok

# Start your dev server
npm run dev

# In another terminal, expose port 3001
ngrok http 3001

# Copy the https URL (e.g., https://abc123.ngrok.io)
# Use: https://abc123.ngrok.io/api/payments/webhook as webhook URL
```

---

## Step 4: Install Dependencies

```bash
cd c:\Users\J\Desktop\YNIT

# Dependencies already installed:
# - @supabase/supabase-js
# - @supabase/auth-helpers-nextjs

# Verify installation
npm list @supabase/supabase-js
```

---

## Step 5: Run the Application

### 5.1 Development Mode

```bash
npm run dev
```

Visit: http://localhost:3001

### 5.2 Production Build

```bash
npm run build
npm start
```

---

## Step 6: Testing the Integration

### 6.1 Test User Signup

1. Go to http://localhost:3001/signup
2. Enter email and password
3. Check for:
   - Success message: "Silakan cek email Anda untuk konfirmasi akun"
   - Email in inbox (if email confirmation enabled)
   - Or auto-login (if email confirmation disabled)

### 6.2 Test Login

1. Go to http://localhost:3001/login
2. Enter credentials
3. Should redirect to `/pesanan-saya`

### 6.3 Test Add to Cart

1. Go to homepage
2. Click "Pesan" button on any tour/service card
3. If not logged in, should redirect to login page
4. If logged in, should see "✓ Ditambahkan" message
5. Cart badge in header should update

### 6.4 Test Cart & Orders

1. Go to http://localhost:3001/pesanan-saya
2. Verify cart items are displayed
3. Click "Lanjut ke Pembayaran"
4. Verify order is created and moved to "Riwayat Pesanan"

### 6.5 Test Payment (Full Flow)

1. Add items to cart
2. Click "Lanjut ke Pembayaran"
3. Order is created with status "pending"
4. (Future): Payment button will call `/api/payments/create`
5. Xendit invoice URL is returned
6. User completes payment
7. Xendit webhook updates order status to "paid"

---

## Step 7: Verify Data in Supabase

### 7.1 Check Users

1. Go to **Authentication** > **Users**
2. Verify new users appear after signup

### 7.2 Check Cart Data

1. Go to **Table Editor** > **cart**
2. Verify cart items are stored with correct user_id

### 7.3 Check Orders

1. Go to **Table Editor** > **orders**
2. Verify orders are created with pending status

### 7.4 Check Order Items

1. Go to **Table Editor** > **order_items**
2. Verify order items are linked to correct order_id

---

## Troubleshooting

### Issue: "Missing Supabase environment variables"

**Solution:**
- Verify `.env.local` exists in project root
- Verify keys are correctly copied (no extra spaces)
- Restart dev server after adding env vars

### Issue: "User must be logged in to add to cart"

**Solution:**
- Check if Supabase auth is working: `console.log(user)` in components
- Verify RLS policies are enabled
- Try logging out and logging in again

### Issue: "Failed to fetch cart"

**Solution:**
- Check Supabase RLS policies in **Authentication** > **Policies**
- Verify `cart` table has SELECT policy for authenticated users
- Check browser console for detailed error messages

### Issue: Email confirmation not working

**Solution:**
- Check Supabase email settings in **Authentication** > **Email Templates**
- Verify SMTP settings (Supabase uses its own SMTP by default)
- For testing, disable email confirmation temporarily

### Issue: Xendit webhook not receiving events

**Solution:**
- Verify webhook URL is publicly accessible
- Check Xendit webhook logs in Dashboard > Webhooks
- Verify callback token matches `.env.local`
- For local testing, use ngrok to expose localhost

---

## Security Best Practices

1. **Never commit `.env.local` to git**
   - Already included in `.gitignore`

2. **Keep Service Role Key secret**
   - Only use in server-side code
   - Never expose in client-side code

3. **Use HTTPS in production**
   - Required for Supabase Auth
   - Required for Xendit webhooks

4. **Enable email confirmation in production**
   - Prevents fake signups
   - Verifies user email addresses

5. **Validate webhook signatures**
   - Always verify `x-callback-token` header
   - Use strong random tokens

---

## Next Steps

### Implement Payment Button in Pesanan Saya

Update `/app/pesanan-saya/page.tsx` to add payment functionality:

```typescript
const handlePayment = async (orderId: string) => {
  try {
    const response = await fetch('/api/payments/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId }),
    });

    const data = await response.json();

    if (data.success) {
      // Redirect to Xendit payment page
      window.location.href = data.invoiceUrl;
    } else {
      alert('Gagal membuat pembayaran: ' + data.error);
    }
  } catch (error) {
    console.error('Payment error:', error);
    alert('Terjadi kesalahan saat membuat pembayaran');
  }
};
```

### Add Email Notifications

After payment is confirmed:
1. Send thank you email to customer
2. Send order notification to admin
3. Optional: Send WhatsApp notification

### Add Order Details Page

Create `/app/pesanan-saya/[orderId]/page.tsx` to show:
- Full order details
- Payment status
- Download invoice/receipt
- Track order progress

---

## Support

For issues or questions:
1. Check Supabase logs: Dashboard > Logs
2. Check Xendit logs: Dashboard > Webhooks > Logs
3. Check browser console for client-side errors
4. Check Next.js logs in terminal

---

## File Reference

**Key Files Created/Modified:**

- `/lib/supabase.ts` - Supabase client configuration
- `/lib/useAuth.ts` - Authentication hook
- `/lib/useCart.ts` - Cart management hook
- `/lib/useOrders.ts` - Order management hook
- `/app/api/payments/create/route.ts` - Payment creation API
- `/app/api/payments/webhook/route.ts` - Xendit webhook handler
- `/app/signup/page.tsx` - Signup page
- `/app/login/page.tsx` - Login page
- `/app/pesanan-saya/page.tsx` - Orders dashboard
- `/components/Card.tsx` - Product card with add-to-cart
- `/components/Header.tsx` - Header with cart badge
- `supabase-schema.sql` - Database schema
- `.env.local` - Environment variables

---

**Setup complete! Your YNIT website now has:**
✓ User authentication with Supabase
✓ Shopping cart stored in database
✓ Order management
✓ Payment integration with Xendit
✓ Webhook handling for automatic order updates
