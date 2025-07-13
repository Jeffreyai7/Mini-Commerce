'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SuccessContent = () => {
  const params = useSearchParams();
  const orderId = params.get('orderId');
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-2xl font-bold text-green-600">🎉 Thank You!</h1>
      <p>Your order has been placed successfully.</p>
      {orderId && <p className="mt-2 text-sm">Order ID: #{orderId}</p>}
    </div>
  );
};

export default SuccessContent;
