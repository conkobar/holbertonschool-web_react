import { checkIsIndex, getFooterCopy, getFullYear } from '../utils/utils';
import React from 'react';
import './Footer.css';
import { connect } from 'react-redux';

// component for footer
const Footer = ({ user }) => {
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Footer);
