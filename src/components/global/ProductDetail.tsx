'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store';
import toast from 'react-hot-toast';
import { useProducts } from '@/hooks/useProducts';
import { useParams } from 'next/navigation';
import LoadingComponent from './LoadingComponent';
import ErrorComponent from './ErrorComponent';

type PageProps = {
  slug: string;
};

const ProductDetailContent = () => {
  const { slug } = useParams<PageProps>();
  const { addToCart, updateQuantity } = useCartStore();

  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <LoadingComponent />;
  if (isError) return <ErrorComponent />;

  const product = products?.find((p) => p.slug === slug);
  if (!product)
    return (
      <div className="text-center text-destructive">Product not found</div>
    );
  const cartItem = useCartStore((state) =>
    state.items.find((i) => i.id === product.id)
  );

  const quantity = cartItem?.quantity ?? 1;
  const handleAddToCart = () => {
    if (product.quantity < 1) return;
    addToCart(product);
    toast.success(`${product.quantity} ${product.name}(s) added to cart`);
    console.log('i clicked');
  };

  return (
    <div className="mx-auto flex flex-col gap-8 px-4 py-8 md:w-[80%] md:flex-row">
      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-border shadow-sm sm:w-1/2 md:w-1/3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            {product.name}
          </h1>
          <p className="mt-2 text-muted-foreground md:text-lg">
            {product.description}
          </p>
          <span className="mt-4 inline-block text-xl font-bold text-primary">
            ₦{product.price.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="mt-2 flex items-center gap-2">
            <button
              className="rounded-md bg-muted px-3 py-1 text-foreground hover:bg-muted/80"
              onClick={() =>
                updateQuantity(product.id, Math.max(1, quantity - 1))
              }
            >
              −
            </button>
            <span className="px-2 text-sm font-medium text-foreground">
              {quantity}
            </span>
            <button
              className="rounded-md bg-muted px-3 py-1 text-foreground hover:bg-muted/80"
              onClick={() => updateQuantity(product.id, quantity + 1)}
            >
              +
            </button>
          </div>
          <button
            className="rounded-lg bg-primary px-6 py-2 text-white transition hover:bg-primary/90"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContent;
