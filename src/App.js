import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/home';
import About from './components/About/about';

function App() {
  return (
    <>
    <Header></Header>
    <main className='main'>
      <Home />
      <About />
    </main>
    </>
  );
}

export default App;
