'use client';
import { useCartStore } from '@/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const CheckoutContent = () => {
  const { items, total, clearCart } = useCartStore();
  const router = useRouter();

  const handlePlaceOrder = () => {
    const orderId = Math.floor(100000 + Math.random() * 900000).toString();
    router.push(`/success?orderId=${orderId}`);
    // Wait 5 seconds before clearing cart to prevent a wrong fallback state
    setTimeout(() => {
      clearCart();
    }, 4000);
  };

  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-bold text-primary">Checkout</h1>

      {items.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center">
          <p className="text-center text-muted-foreground">
            Your cart is empty.
          </p>
          <Image
            src="/images/cart.png"
            alt="Empty Cart"
            width={200}
            height={200}
            className="mx-auto mt-4"
          />
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b border-border pb-2 text-foreground"
              >
                <span>
                  {item.name}{' '}
                  <span className="text-muted-foreground">
                    (x{item.quantity})
                  </span>
                </span>
                <span className="font-medium">
                  ₦{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-lg font-bold text-primary">
              Total: ₦{total().toFixed(2)}
            </p>
            <button
              onClick={handlePlaceOrder}
              className="mt-4 rounded-md bg-primary px-6 py-2 text-primary-foreground transition hover:opacity-90"
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
