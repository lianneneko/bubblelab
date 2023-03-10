import React from 'react';

import { images } from '../../constants'

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__ubuntu'>{title}</p>
    <img src={images.lab} alt="lab" className="lab__img"/>
  </div>
);

export default SubHeading;
