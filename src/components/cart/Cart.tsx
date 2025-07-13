'use client';
import { useCartStore } from '@/store';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

const CartContent = () => {
  const { items, removeFromCart, updateQuantity, total } = useCartStore();
  const router = useRouter();

  if (items.length === 0) {
    return <div className="p-4 text-center">🛒 Your cart is empty.</div>;
  }
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-4 text-2xl font-bold">Your Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4">
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">₦{item.price.toFixed(2)}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  className="rounded bg-gray-200 px-2 py-1"
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  className="rounded bg-gray-200 px-2 py-1"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-semibold">
                ₦{(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="mt-2 text-sm text-red-500"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">Total: ₦{total().toFixed(2)}</h2>
      </div>
      <div>
        <button
          className="mt-4 cursor-pointer rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
          onClick={() => router.push('/checkout')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartContent;
