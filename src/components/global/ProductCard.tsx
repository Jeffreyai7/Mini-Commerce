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

const ProductCard = ( product : Product) => {
  return (
    <div>
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{truncateText(product.description, 50)}</CardDescription>
        </CardHeader>
        <CardContent>
          <img src={product.image} alt={product.name} className="object-cover w-28 h-28 rounded-md" />
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