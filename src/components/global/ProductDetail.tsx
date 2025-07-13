import React from 'react'
import Image from 'next/image';
import { useCartStore } from '@/store';

const ProductDetailContent = (product: Product) => {
const {addToCart} = useCartStore()

  return (
    <div className='flex flex-col md:flex-row md:w-[80%] mx-auto gap-8'>
        <div className="relative w-full sm:w-1/2 md:w-1/3 aspect-square">
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-cover rounded-lg"
    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
  />
</div>
        <div>
            <div className='flex flex-col gap-2 mb-4'>
            <h1 className='text-[1.5rem] md:text-[2rem] text-gray-400 font-bold'>{product.name}</h1>
            <p className='text-[1rem] md:text-[1.2rem] w-[80%] '>{product.description}</p>
            <span className='text-[1rem] md:text-[1.2rem] font-bold'>${product.price.toFixed(2)}</span>

        </div>
            <div>
                <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
                <button className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer' onClick={() => {addToCart({...product, quantity: 1})}}  >Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailContent