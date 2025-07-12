"use client"
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { truncateText } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const ProductCard = ( product : Product) => {
const router = useRouter();

  // click handler for view details
  const handleViewDetails = (slug: string) => {
    router.push(`/product/${slug}`);
  }


  return (
    <div>
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{truncateText(product.description, 50)}</CardDescription>
        </CardHeader>
        <CardContent>
          <div onClick={() => handleViewDetails(product.slug)} className='flex items-center justify-between hover:scale-105 transition-transform duration-200 cursor-pointer'>
          <img src={product.image} alt={product.name} className="object-cover w-28 h-28 rounded-md " />
            <span className="text-[2rem] font-semibold ml-4">${product.price.toFixed(2)}</span>
          </div>
        </CardContent>
        <CardFooter>
          <CardAction onClick={() => handleViewDetails(product.slug)} className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer">
            Buy Now
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  )
  }

export default ProductCard;