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
import Image from 'next/image';

const ProductCard = ( product : Product) => {
  return (
    <div>
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={product.image} alt={product.name} width={100} height={100} className="object-cover rounded-md" />
        </CardContent>
        <CardFooter>
          <CardAction className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
            Add to Cart
          </CardAction>
        </CardFooter>
      </Card>
    </div>
  )
}
export default ProductCard;