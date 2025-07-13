// app/cart/page.tsx
'use client';
import { useCartStore } from '@/store';
import Image from 'next/image';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return <div className="p-4 text-center">🛒 Your cart is empty.</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {items.map(item => (
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
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
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
                className="text-red-500 text-sm mt-2"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-6">
        <h2 className="text-xl font-bold">
          Total: ₦{total().toFixed(2)}
        </h2>
      </div>
    </div>
  );
}
