import React from 'react';

import { AboutUs, Footer, Gallery, Header, Intro, OurMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <OurMenu />
    <Intro />
    <Gallery />
    <Footer />
  </div>
);

export default App;
