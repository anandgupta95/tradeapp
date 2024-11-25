import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Product from './components/Product'; 
import Industry from './components/Industry'; 
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction'; 
import ContactInfo from './components/ContactInfo'; 
import FAQ from './components/FAQ';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Hero />
      <Product />
      <Industry />
      <Testimonials />
      <CallToAction />
      <ContactInfo />
      <FAQ />
      <Footer/> 
     </main>
    </div>
  );
}

export default App;
