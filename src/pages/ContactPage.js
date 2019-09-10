import React from 'react';
import Hero from '../components/Hero';
import contactImg from '../images/contact_us.1200x627.jpg';
import Contact from '../components/ContactPage/Contact';
export default function ContactPage() {
  return (
    <>
      <Hero img={contactImg} />
      <Contact />
    </>
  );
}
