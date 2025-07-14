'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { GiPartyPopper } from 'react-icons/gi';
import Link from 'next/link';

const SuccessContent = () => {
  const params = useSearchParams();
  const orderId = params.get('orderId');

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background px-4 text-center text-foreground">
      <h1 className="mb-4 text-3xl font-extrabold text-primary">
        <GiPartyPopper className="text-5xl text-yellow-400" /> Thank You!
      </h1>
      <p className="text-base text-muted-foreground">
        Your order has been placed successfully.
      </p>
      {orderId && (
        <p className="mt-2 text-sm font-medium text-accent-foreground">
          Order ID: <span className="font-semibold">#{orderId}</span>
        </p>
      )}
      <div className="mt-6">
        <Link
          href="/"
          className="inline-block rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessContent;
