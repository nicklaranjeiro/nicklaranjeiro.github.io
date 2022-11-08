import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/about';
import Experience from './components/Experience/experience';
import Testimonials from './components/Testimonials/testimonials';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Scrollup from './components/Scrollup/scrollup';
import Work from './components/Work/work';

function App() {
  return (
    <>
    <Header></Header>
    <main className='main'>
      <Home />
      <About />
      <Experience />
      <Work />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <Scrollup />
    </>
  );
}

export default App;
