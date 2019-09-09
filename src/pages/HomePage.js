import React from 'react';
import Header from '../components/Header';
import Services from '../components/HomePage/Services';
import Featured from '../components/HomePage/Featured';
export default function HomePage() {
  return (
    <>
      <Header />

      <Services />
      <Featured />
    </>
  );
}
