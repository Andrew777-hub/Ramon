import React from 'react';
import Header from './components/Header';
import Baner from './components/Baner';
import Footer from './components/Footer';
import About from './components/About';
import Advantages from './components/Advantages';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import FeedbackButton from './components/FeedbackButton';
import Assortment from './components/Assortment';


function App() {
  return (
    <>
      <Header />
      <div id="baner"><Baner /></div>
      <div id="about"><About /></div>
      <div id="assortment"><Assortment /></div>
      <div id="advantages"><Advantages /></div>
      <div id="reviews"><Reviews /></div>
      <div id="faq"><FAQ /></div>
      <div id="footer"><Footer /></div>
      <FeedbackButton />
    </>
  );
}

export default App;



