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
import Image from 'next/image';

const ProductCard = (product: Product) => {
  const router = useRouter();

  const handleViewDetails = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  return (
    <div>
      <Card className="mx-auto w-full max-w-sm rounded-xl border border-border bg-card shadow-md transition hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">
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
            <Image
              width={112}
              height={112}
              src={product.image}
              alt={product.name}
              className="h-28 w-28 rounded-lg border border-border object-cover"
            />
            <span className="ml-4 text-xl font-semibold text-primary">
              ₦{product.price.toFixed(2)}
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <CardAction
            onClick={() => handleViewDetails(product.slug)}
            className="w-full cursor-pointer rounded-lg bg-primary px-4 py-2 text-center text-white transition hover:bg-primary/90"
          >
            Buy Now
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
