import { checkIsIndex, getFooterCopy, getFullYear } from '../utils/utils';
import React, { useContext } from 'react';
import './Footer.css';
import AppContext from '../App/AppContext';

// component for footer
const Footer = () => {
  const { user } = useContext(AppContext);
  return (
    <div className='App-footer'>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(checkIsIndex())}
      </p>
      {user.isLoggedIn && (
        <p>
          <a href='#'>Contact us</a>
        </p>
      )}
    </div>
  );
};

export default Footer;
