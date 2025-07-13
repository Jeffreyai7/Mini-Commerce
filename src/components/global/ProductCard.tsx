'use client';
import React from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { truncateText } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const ProductCard = (product: Product) => {
  const router = useRouter();

  // click handler for view details
  const handleViewDetails = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  return (
    <div>
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>
            {truncateText(product.description, 50)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            onClick={() => handleViewDetails(product.slug)}
            className="flex cursor-pointer items-center justify-between transition-transform duration-200 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-28 w-28 rounded-md object-cover"
            />
            <span className="ml-4 text-[2rem] font-semibold">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <CardAction
            onClick={() => handleViewDetails(product.slug)}
            className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Buy Now
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
