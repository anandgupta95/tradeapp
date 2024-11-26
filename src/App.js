import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Categories from './pages/Categories';
import Product from './pages/Product'; 
import Industry from './pages/Industry'; 
import Testimonials from './pages/Testimonials';
import CallToAction from './pages/CallToAction'; 
import ContactInfo from './pages/ContactInfo'; 
import FAQ from './pages/FAQ';
import Footer from './pages/Footer'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Hero />
      <Categories/>
      <Product />
      <Industry />
      <Testimonials />
      <CallToAction />
      <ContactInfo />
      <FAQ />
      <Footer/> 
     </main>
     {/* <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router> */}
    </div>
  );
}

export default App;
