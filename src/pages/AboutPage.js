import React from 'react';
import Info from '../components/AboutPage/Info';
import Hero from '../components/Hero';
import aboutBcg from '../images/Shoe-Carnival-1080x720.jpg';
export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg} />
      <Info />
    </>
  );
}
