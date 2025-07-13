"use client";
import ProductDetailContent from '@/components/global/ProductDetail';
import { useProducts } from '@/hooks/useProducts';
import React from "react";

const ProductDetail = ({params}: PageProps) => {

  const { slug } = params;
    const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product</div>;

  const product = products!.find((p) => p.slug === slug);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <ProductDetailContent product={product} />
    </div>
  );
};

export default ProductDetail;