'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from 'react-hot-toast';
import { useProducts } from '@/hooks/useProducts';
import { useParams } from 'next/navigation';

type PageProps = {
  slug: string;
};

const ProductDetailContent = ( ) => {
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
    <div className='flex flex-col md:flex-row md:w-[80%] mx-auto gap-8'>
      <div className="relative w-full sm:w-1/2 md:w-1/3 aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      <div>
        <div className='flex flex-col gap-2 mb-4'>
          <h1 className='text-[1.5rem] md:text-[2rem] text-gray-400 font-bold'>{product.name}</h1>
          <p className='text-[1rem] md:text-[1.2rem] w-[80%]'>{product.description}</p>
          <span className='text-[1rem] md:text-[1.2rem] font-bold'>${product.price.toFixed(2)}</span>
        </div>

        <div className="grid w-full max-w-sm items-center gap-3 mb-4">
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
          className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer'
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailContent;
