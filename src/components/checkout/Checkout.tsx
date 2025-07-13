"use client"
import { useCartStore } from '@/store';
import { useRouter } from 'next/navigation';
import React from 'react'

const CheckoutContent = () => {
    const { items, total, clearCart } = useCartStore();
  const router = useRouter();

  const handlePlaceOrder = () => {
    const orderId = Math.floor(100000 + Math.random() * 900000).toString();
    clearCart();
    router.push(`/checkout/success?orderId=${orderId}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>₦{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="text-right mt-6">
            <p className="font-semibold text-lg">
              Total: ₦{total().toFixed(2)}
            </p>
            <button
              onClick={handlePlaceOrder}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CheckoutContent
