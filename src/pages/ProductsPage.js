import React from 'react';
import Products from '../components/ProductsPage/Products';
import Hero from '../components/Hero';
import productsBcg from '../images/someone-figured-out-the-purpose-of-the-extra-shoelace-hole-on-your-running-shoes--and-it-will-blow-your-mind.jpg';

export default function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
}
