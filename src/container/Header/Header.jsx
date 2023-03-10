import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <section id="home">
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
    <SubHeading title="tea.coffee" />
    <h1 className="app__header-h1">Your next mix in flavor</h1>
    <p className="p__opensans" style={{ margin: '2rem 0' }}>The Bubble Lab is a local shop that serves the best tea and coffee in a comfortable environment. We pride ourselves on offering friendly service to all customers. We have a great selection of teas both hot and iced. Our staff are dedicated to providing our customers with exceptional service, whether they are seeking out something new or trying to pick up some favorites.</p>
    <a href="#menu"><button type="button" className="custom__button">Explore Menu</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
  </section>
);

export default Header;