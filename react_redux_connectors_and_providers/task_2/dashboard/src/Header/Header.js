import logo from '../assets/logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

const Header = ({ user, logout }) => {
  return (
    <div className={`App-header ${css(styles.appHeader)}`}>
      <img
        src={logo}
        className={`App-logo ${css(styles.appLogo)}`}
        alt='logo'
      />
      <h1 className={`title ${css(styles.title)}`}>School dashboard</h1>
      {user.isLoggedIn && (
        <div id='logoutSection'>
          Welcome {user.email} (
          <a href='#' onClick={logout}>
            Logout
          </a>
          )
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logout,
};

const styles = StyleSheet.create({
  appLogo: {
    height: '40vmin',
    pointerEvents: 'none',
  },

  appHeader: {
    fontSize: 'calc(10px + 2vmin)',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5%',
  },

  title: {
    color: 'rgb(224,53,75)',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
