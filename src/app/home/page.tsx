import Hero from '@/components/global/Hero';
import ProductContainer from '@/components/homepage/ProductContainer';
import React from 'react';

const Home = () => {
  const page = 'Popular Products';
  return (
    <section>
      <Hero />
      <ProductContainer page={page} />
      {/* Add more components or content as needed */}
    </section>
  );
};

export default Home;
