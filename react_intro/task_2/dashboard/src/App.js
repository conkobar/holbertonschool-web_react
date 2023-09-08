import logo from './holberton_logo.jpg';
import './App.css';

import React from 'react';
import { getFooterCopy, getFullYear } from './utils';

const Header = () => (
  <div className='App-header'>
    <img src={logo} alt='logo' />
    <h1>School dashboard</h1>
  </div>
);

const Body = () => (
  <div className='App-body'>
    <p>Login to access the full dashboard</p>
    <form>
      <label htmlFor='email'>
        Email:
        <input type='email' id='email' name='email'></input>
      </label>
      <label htmlFor='password'>
        Password:
        <input type='password' id='password' name='password'></input>
      </label>
      <button type='submit'>OK</button>
    </form>
  </div>
);

const Footer = () => (
  <div className='App-footer'>
    <p>
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </p>
  </div>
);

const App = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

export default App;
