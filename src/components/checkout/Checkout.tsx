'use client';
import { useCartStore } from '@/store';
import { useRouter } from 'next/navigation';
import React from 'react';

const CheckoutContent = () => {
  const { items, total, clearCart } = useCartStore();
  const router = useRouter();

  const handlePlaceOrder = () => {
    const orderId = Math.floor(100000 + Math.random() * 900000).toString();
    clearCart();
    router.push(`/checkout/success?orderId=${orderId}`);
  };

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Checkout</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>₦{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-lg font-semibold">
              Total: ₦{total().toFixed(2)}
            </p>
            <button
              onClick={handlePlaceOrder}
              className="mt-4 rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutContent;
