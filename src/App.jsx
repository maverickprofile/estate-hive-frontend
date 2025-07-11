import React from 'react';
import './App.css';
import Navbar from './components/common/navbar';
import HomePage from './components/homepage';
import Footer from './components/common/footer';


function App() {
  return (
    <>
      <Navbar />
      <HomePage />
        <Footer />
    </>
  );
}

export default App;
