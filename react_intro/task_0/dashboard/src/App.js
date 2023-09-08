import logo from './holberton_logo.jpg';
import './App.css';

import React from 'react';

const Header = () => (
  <div className='App-header'>
    <img src={logo} alt='logo' />
    <h1>School dashboard</h1>
  </div>
);

const Body = () => (
  <div className='App-body'>
    <p>Login to access the full dashboard</p>
  </div>
);

const Footer = () => (
  <div className='App-footer'>
    <p>Copyright 2020 - holberton School</p>
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
