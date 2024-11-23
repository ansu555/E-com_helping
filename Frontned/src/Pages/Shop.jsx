import React from 'react';
import Hero from '../Components/Hero/Hero';
import Offers from '../Components/Offers/Offers';
import News from '../Components/News/News';
import Newcollections from '../Components/Newcollections/Newcollections';
import Footer from '../Components/Footer/Footer';

function Shop()  {
  return (
  <div>
    <Hero/>
    <Offers/>
    <Newcollections/>
    <News/>
    {/* <Footer/> */}
    
  </div>
  )
}

export default Shop;


