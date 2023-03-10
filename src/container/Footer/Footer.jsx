import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <section id="footer">
  <div className="app__footer section__padding">
    <FooterOverlay />
    
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">3rd Floor SM City Faiview cor. Regalado Ave., Quezon City, Metro Manila</p>
        <p className="p__opensans">(02) 862 7701</p>
        <p className="p__opensans">(02) 862 7702</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.bubblelab} alt="footer_logo" />
        <p className="p__opensans">"Have a bubble day."</p>
        <img src={images.lab} alt="lab" className="lab__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/" target="_blank"><FiFacebook /></a>
          <a href="https://www.twitter.com/" target="_blank"><FiTwitter /></a>
          <a href="https://www.instagram.com/" target="_blank"><FiInstagram /></a>
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Thursday</p>
        <p className="p__opensans">09:00am - 10:00pm</p>
        <p className="p__opensans">Friday-Sunday</p>
        <p className="p__opensans">09:00am - 02:00am</p>
      </div>
    </div>
      <div className="footer__copyright">
        <p className="p__opensans">2023 Bubble Lab. All Rights reserved.</p>
      </div>
  </div>
  </section>
);

export default Footer;
