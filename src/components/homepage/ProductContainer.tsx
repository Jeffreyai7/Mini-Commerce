'use client';
import React from 'react';
import ProductCard from '../global/ProductCard';
import { useProducts } from '@/hooks/useProducts';
import { SkeletonCard } from '../global/Skeleton';

interface ProductContainerProps {
  page: string;
}

const ProductContainer = ({ page }: ProductContainerProps) => {
  const { data: products, isLoading, isError } = useProducts();
  console.log(products);

  if (isLoading)
    return (
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 md:px-6 lg:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  if (isError) return <div>Error loading products</div>;
  return (
    <div>
      <h2 className="my-4 text-center text-2xl font-bold">{page}</h2>
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 md:px-6 lg:grid-cols-4">
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
