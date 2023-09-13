import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// const Header = () => (
//   <div className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="title">School dashboard</h1>
//   </div>
// );

// const Login = () => (
//   <div className='App-body'>
//     <p>Login to access the full dashboard</p>
//     <form>
//       <label htmlFor='email'>Email</label>
//       <input type='email' name='email' id='email' autoComplete='email'></input>
//       <label htmlFor='password'>Password</label>
//       <input
//         type='password'
//         name='password'
//         id='password'
//         autoComplete='true'
//       ></input>
//     </form>
//   </div>
// );

// const Footer = () => (
//   <div className="App-footer">
//     <p>Copyright {getFullYear()} - {getFooterCopy(checkIsIndex())}</p>
//   </div>
// );

function App() {
  return (
    <>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
