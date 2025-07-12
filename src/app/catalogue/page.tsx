import ProductContainer from '@/components/homepage/ProductContainer'
import React from 'react'


const Catalogue = () => {
    const page = "All Products";
  return (
    <div>
        <ProductContainer page={page} />
    </div>
  )
}

export default Catalogue