import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <section id="about">
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.bubbles} alt="bubbles" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__ubuntu">About Us</h1>
        <img src={images.lab} alt="about_lab" className="lab__img" />
        <p className="p__opensans">Bubble Lab is a  tea and coffee shop that is committed to providing our customers with the best possible experience. Our aim is to ensure that you have a satisfying experience by making sure that your order is delivered on time and with the highest quality ingredients. We are proud of what we do and we hope that you enjoy the products we serve!</p>
      </div>

      <div className="app__aboutus-content_drink flex__center">
        <img src={images.drink} alt="about_drink" />
      </div>

      <div className="app__aboutus-content_ourstory">
        <h1 className="headtext__ubuntu">Our Story</h1>
        <img src={images.lab} alt="about_lab" className="lab__img" />
        <p className="p__opensans">We started Bubble Lab because we love tea and coffee, but we wanted something different when it came to the way that those beverages are served. We're passionate about what we do, and we strive to create a welcoming environment for all of our customers.</p>
      </div>

    </div>
  </div>
  </section>
);

export default AboutUs;