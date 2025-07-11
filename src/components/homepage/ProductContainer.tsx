import React from 'react'
import ProductCard from '../global/ProductCard'

const ProductContainer = () => {
  return (
    <div className='container mx-auto px-4 md:px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
    {
        // You can map through an array of products here
        // For demonstration, we are rendering multiple ProductCard components
        Array.from({ length: 8 }).map((_, index) => (
            <ProductCard key={index} />
        ))
    }
    </div>
  )
}

export default ProductContainer