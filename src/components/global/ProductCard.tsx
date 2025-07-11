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

const ProductCard = () => {
  return (
    <div>
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle>Product Title</CardTitle>
          <CardDescription>Product description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/images/product.jpg" alt="Product Image" className="w-full h-48 object-cover rounded-md" />
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