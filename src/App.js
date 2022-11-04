import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/about';
import Experience from './components/Experience/experience';
import Testimonials from './components/Testimonials/testimonials';
import Contact from './components/Contact/contact';

function App() {
  return (
    <>
    <Header></Header>
    <main className='main'>
      <Home />
      <About />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
    </>
  );
}

export default App;
