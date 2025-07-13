'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SuccessContent = () => {
  const params = useSearchParams();
  const orderId = params.get('orderId');

  return (
    <div className="bg-background text-foreground flex h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-primary mb-4 text-3xl font-extrabold">
        🎉 Thank You!
      </h1>
      <p className="text-muted-foreground text-base">
        Your order has been placed successfully.
      </p>
      {orderId && (
        <p className="text-accent-foreground mt-2 text-sm font-medium">
          Order ID: <span className="font-semibold">#{orderId}</span>
        </p>
      )}
      <div className="mt-6">
        <a
          href="/"
          className="bg-primary text-primary-foreground inline-block rounded-md px-5 py-2 text-sm font-medium transition hover:opacity-90"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
};

export default SuccessContent;
