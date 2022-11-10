import React from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Data from './components/Data';
import Header from './components/Header';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div className='container-fluid'>
        <About />
        <Services />
        <Data />
      </div>
    </div>
  );
}

export default App;
