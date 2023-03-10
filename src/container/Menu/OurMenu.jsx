import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images,data } from '../../constants';
import './OurMenu.css';

const OurMenu = () => (
  <section id="menu">
  <div className="app__ourMenu flex__center section__padding" id="menu">
    <div className="app__ourMenu-title">
      <SubHeading title="Drinks that freshen your day." />
      <h1 className="headtext__ubuntu">Our Menu</h1>
    </div>

    <div className="app__ourMenu-menu">
      <div className="app__ourMenu-menu_classics flex__center">
        <p className="app__ourMenu-menu_heading">Classic Drinks</p>
        <div className="app__ourMenu_menu_items">
          {data.classics.map((classics, index) => (
            <MenuItem key={classics.title + index} title={classics.title} price={classics.price} tags={classics.tags} />
          ))}
      </div>
      </div>

          <div className="app__ourMenu-menu_img">
              <img src={images.menu} alt="menu img" />
          </div>

        <div className="app__ourMenu-menu_specialtydrinks flex__center">
        <p className="app__ourMenu-menu_heading">Specialty Drinks</p>
        <div className="app__ourMenu_menu_items">
          {data.specialtydrinks.map((specialtydrinks, index) => (
            <MenuItem key={specialtydrinks.title + index} title={specialtydrinks.title} price={specialtydrinks.price} tags={specialtydrinks.tags} />
          ))}
        </div>
        </div>
    </div>

    <div style={{marginTop: '15px'}}></div>
  </div>
  </section>
);

export default OurMenu;
