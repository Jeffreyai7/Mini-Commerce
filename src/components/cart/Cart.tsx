'use client';
import { useCartStore } from '@/store';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

const CartContent = () => {
  const { items, removeFromCart, updateQuantity, total } = useCartStore();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div>
        <p className="text-center text-muted-foreground">Your cart is empty.</p>
        <Image
          src="/images/cart.png"
          alt="Empty Cart"
          width={200}
          height={200}
          className="mx-auto mt-4"
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-4 text-2xl font-bold text-primary">Your Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b border-border pb-4"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-md object-cover"
            />

            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">
                {item.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                ₦{item.price.toFixed(2)}
              </p>

              <div className="mt-2 flex items-center gap-2">
                <button
                  className="rounded-md bg-muted px-3 py-1 text-foreground hover:bg-muted/80"
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                >
                  −
                </button>
                <span className="px-2 text-sm font-medium text-foreground">
                  {item.quantity}
                </span>
                <button
                  className="rounded-md bg-muted px-3 py-1 text-foreground hover:bg-muted/80"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <p className="font-semibold text-foreground">
                ₦{(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="mt-2 text-sm text-destructive hover:underline"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold text-primary">
          Total: ₦{total().toFixed(2)}
        </h2>
      </div>

      <div>
        <button
          className="mt-4 rounded-md bg-primary px-6 py-2 text-primary-foreground transition hover:opacity-90"
          onClick={() => router.push('/checkout')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartContent;
