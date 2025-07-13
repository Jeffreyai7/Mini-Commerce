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

  const handleViewDetails = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  return (
    <div>
      <Card className="border-border bg-card mx-auto w-full max-w-sm rounded-xl border shadow-md transition hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-foreground text-xl">
            {product.name}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {truncateText(product.description, 50)}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div
            onClick={() => handleViewDetails(product.slug)}
            className="flex cursor-pointer items-center justify-between transition-transform duration-200 hover:scale-[1.03]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="border-border h-28 w-28 rounded-lg border object-cover"
            />
            <span className="text-primary ml-4 text-xl font-semibold">
              ₦{product.price.toFixed(2)}
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <CardAction
            onClick={() => handleViewDetails(product.slug)}
            className="bg-primary hover:bg-primary/90 w-full cursor-pointer rounded-lg px-4 py-2 text-center text-white transition"
          >
            Buy Now
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
