import React from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Data from './components/Data';
import Header from './components/Header';
import Services from './components/Services';
import { ParallaxProvider } from 'react-scroll-parallax';
import Time from './components/Time';
import Company from './components/Company';
import Portfolio from './components/Portfolio';
import News from './components/News';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div className='container-fluid'>
        <About />
        <Services />
      </div>
      <ParallaxProvider>
        <Data />
        <Time />
        <Company />
      </ParallaxProvider>
      <Portfolio />
      <News />
    </div>
  );
}

export default App;
