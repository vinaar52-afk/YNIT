'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';
import { useCart } from '@/lib/useCart';
import { useOrders } from '@/lib/useOrders';
import { formatCurrency } from '@/lib/format';
import { supabase } from '@/lib/supabase';

export default function PesananSayaPage() {
  const router = useRouter();
  const { user, isLoggedIn, isLoading, logout } = useAuth();
  const { cart, removeFromCart, clearCart, getTotalPrice, isLoading: cartLoading } = useCart(user?.id);
  const { orders, createOrder, isLoading: ordersLoading } = useOrders(user?.id);

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, isLoading, router]);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    
    const result = await createOrder(cart, getTotalPrice());

    if (!result.success || !result.orderId) {
      alert('Gagal membuat pesanan: ' + (result.error || 'Silakan coba lagi'));
      return;
    }

    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData?.session?.access_token;

    if (!accessToken) {
      alert('Sesi login berakhir. Silakan masuk kembali untuk melanjutkan pembayaran.');
      return;
    }

    const paymentResponse = await fetch('/api/payments/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ orderId: result.orderId }),
    });

    const paymentPayload = await paymentResponse.json();

    if (!paymentResponse.ok || !paymentPayload?.success || !paymentPayload?.data?.invoiceUrl) {
      alert(paymentPayload?.error || 'Gagal membuat pembayaran. Silakan coba lagi.');
      return;
    }

    await clearCart();

    window.location.href = paymentPayload.data.invoiceUrl;
  };

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  if (isLoading || !isLoggedIn) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-neutral-600">Loading...</p>
      </div>
    );
  }

  return (
    <main className="w-full bg-white min-h-screen py-12">
      <div className="max-w-[1040px] mx-auto px-4">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-[28px] font-medium mb-2">Pesanan Saya</h1>
            <p className="text-[15px] text-neutral-700">Halo, {user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-[15px] text-red-600 hover:text-red-800"
          >
            Keluar
          </button>
        </div>

        {/* Keranjang Saya */}
        <section className="mb-12">
          <h2 className="text-[20px] font-medium mb-6">Keranjang Saya</h2>
          
          {cartLoading ? (
            <div className="bg-neutral-50 rounded-[12px] p-8 text-center">
              <p className="text-[15px] text-neutral-700">Memuat keranjang...</p>
            </div>
          ) : cart.length === 0 ? (
            <div className="bg-neutral-50 rounded-[12px] p-8 text-center">
              <p className="text-[15px] text-neutral-700 mb-4">Keranjang Anda masih kosong</p>
              <Link href="/">
                <button className="btn-secondary">Mulai Memesan</button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={`${item.tourId}-${index}`} className="bg-white border border-neutral-200 rounded-[12px] p-6 flex gap-6">
                  <img 
                    src={item.image} 
                    alt={item.tourName} 
                    className="w-32 h-32 object-cover rounded-[12px]"
                  />
                  <div className="flex-1">
                    <h3 className="text-[16px] font-medium mb-2">{item.tourName}</h3>
                    <p className="text-[15px] text-neutral-700 mb-4">
                      {item.type === 'tour' && 'Paket Tour'}
                      {item.type === 'study' && 'Program Studi'}
                      {item.type === 'dokumen' && 'Layanan Dokumen'}
                      {item.type === 'medical' && 'Layanan Medical'}
                    </p>
                    <p className="text-[15px] text-neutral-700 mb-1">Jumlah: {item.quantity}x</p>
                    <p className="text-[18px] font-medium text-red-600">{formatCurrency(item.price * item.quantity)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.tourId)}
                    className="text-red-600 hover:text-red-800 text-[15px]"
                  >
                    Hapus
                  </button>
                </div>
              ))}

              <div className="bg-neutral-50 rounded-[12px] p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[16px] font-medium">Total</span>
                  <span className="text-[24px] font-medium text-red-600">{formatCurrency(getTotalPrice())}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="btn-primary w-full"
                >
                  Lanjut ke Pembayaran
                </button>
                <p className="text-[13px] text-neutral-600 text-center mt-3">
                  Setelah checkout, pesanan akan masuk ke daftar pesanan Anda
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Pesanan Saya */}
        <section id="pesanan-section">
          <h2 className="text-[20px] font-medium mb-6">Riwayat Pesanan</h2>
          
          {ordersLoading ? (
            <div className="bg-neutral-50 rounded-[12px] p-8 text-center">
              <p className="text-[15px] text-neutral-700">Memuat pesanan...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="bg-neutral-50 rounded-[12px] p-8 text-center">
              <p className="text-[15px] text-neutral-700">Belum ada pesanan</p>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white border border-neutral-200 rounded-[12px] p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-[15px] font-medium mb-1">{order.id}</p>
                      <p className="text-[13px] text-neutral-600">
                        {new Date(order.createdAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[13px] font-medium ${
                      order.status === 'paid' 
                        ? 'bg-green-100 text-green-700' 
                        : order.status === 'completed'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status === 'paid' && 'Sudah Dibayar'}
                      {order.status === 'pending' && 'Menunggu Pembayaran'}
                      {order.status === 'completed' && 'Selesai'}
                      {order.status === 'cancelled' && 'Dibatalkan'}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex gap-4 text-[15px]">
                        <img 
                          src={item.image} 
                          alt={item.tourName} 
                          className="w-16 h-16 object-cover rounded-[8px]"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{item.tourName}</p>
                          <p className="text-neutral-600">{item.quantity}x · {formatCurrency(item.price)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-neutral-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[15px] font-medium">Total</span>
                      <span className="text-[18px] font-medium text-red-600">{formatCurrency(order.totalAmount)}</span>
                    </div>
                    {order.paymentId && (
                      <p className="text-[13px] text-neutral-600">Payment ID: {order.paymentId}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
