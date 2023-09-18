import { checkIsIndex, getFooterCopy, getFullYear } from '../utils/utils';
import React from 'react';
import './Footer.css';

// component for footer
const Footer = () => (
  <div className='App-footer'>
    <p>
      Copyright {getFullYear()} - {getFooterCopy(checkIsIndex())}
    </p>
  </div>
);

export default Footer;
