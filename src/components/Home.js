import React from 'react';
import Header from './Header/Header';
import Baner from './Baner/Baner';
import Footer from './Footer/Footer';
import About from './About/About';
import Advantages from './Advantages/Advantages';
import Reviews from './Reviews/Reviews';
import FAQ from './FAQ/FAQ';
import FeedbackButton from './FeedbackButton/FeedbackButton';
import Assortment from './Assortment/Assortment';

function Home() {
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

export default Home;
