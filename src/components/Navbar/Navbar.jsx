import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiDrinkMe } from 'react-icons/gi';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.bubblelab} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#footer">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="https://www.foodpanda.ph/" target="_blank" className="p__opensans">Order Now</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#CB6CE6" fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GiDrinkMe fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />    
            <ul className="app__navbar-smallscreen_links">
              <li onClick={() => setToggleMenu(false)} className="p__opensans"><a href="#home">Home</a></li>
              <li onClick={() => setToggleMenu(false)} className="p__opensans"><a href="#about">About</a></li>
              <li onClick={() => setToggleMenu(false)} className="p__opensans"><a href="#menu">Menu</a></li>
              <li onClick={() => setToggleMenu(false)} className="p__opensans"><a href="#footer">Contact</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
    )
  }

export default Navbar;