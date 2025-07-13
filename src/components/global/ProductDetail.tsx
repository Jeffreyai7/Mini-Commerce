'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import toast from 'react-hot-toast';
import { useProducts } from '@/hooks/useProducts';
import { useParams } from 'next/navigation';

type PageProps = {
  slug: string;
};

const ProductDetailContent = () => {
  const { slug } = useParams<PageProps>();
  const { addToCart } = useCartStore();
  const [quantity, setQuantity] = useState<number>(1);

  const { data: products, isLoading, isError } = useProducts();

  const product = products!.find((p) => p.slug === slug);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    if (quantity < 1) return;

    addToCart({ ...product, quantity });
    toast.success(`${quantity} ${product.name}(s) added to cart`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product</div>;
  return (
    <div className="mx-auto flex flex-col gap-8 md:w-[80%] md:flex-row">
      <div className="relative aspect-square w-full sm:w-1/2 md:w-1/3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      <div>
        <div className="mb-4 flex flex-col gap-2">
          <h1 className="text-[1.5rem] font-bold text-gray-400 md:text-[2rem]">
            {product.name}
          </h1>
          <p className="w-[80%] text-[1rem] md:text-[1.2rem]">
            {product.description}
          </p>
          <span className="text-[1rem] font-bold md:text-[1.2rem]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div className="mb-4 grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            type="number"
            id="quantity"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-[100px]"
          />
        </div>

        <button
          className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailContent;
