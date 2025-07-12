import React from 'react'
import Image from 'next/image';

const ProductDetail = () => {
  return (
    <div>
        <div>
            <Image src={product.image} alt={product.name} width={200} height={200} />
        </div>
        <div>
            <div>
            <p>Company</p>
            <h1>description</h1>
            <span>${product.price.toFixed(2)}</span>

        </div>
            <div>
                <div>
                <button onClick={() => {}}> -</button>
                <span>1</span>
                <button onClick={() => {}}>+</button>
                </div>
                <button onClick={() => {}}  >Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail