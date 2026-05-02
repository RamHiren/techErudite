import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Feature from './components/Feature';
import TrustBadges from './components/TrustBadges';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AppDownload from './components/AppDownload';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Stats />
      <Feature />
      <TrustBadges />
      <Testimonials />
      <FAQ />
      <AppDownload />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
