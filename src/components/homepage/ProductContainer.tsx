"use client";
import React from 'react'
import ProductCard from '../global/ProductCard'
import { useProducts } from '@/hooks/useProducts';

const ProductContainer = () => {

  const { data: products, isLoading, isError } = useProducts();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;
  return (
    <div className='container mx-auto px-4 md:px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {
        products?.map(product => (
            <ProductCard key={product.id} {...product} />
        ))

        
    }
    </div>
  )
}

export default ProductContainer