import React, { useState } from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  // create a hook for isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [enableSubmit, setEnableSubmit] = useState(false);

  // make function to help log in
  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
  };

  // email handler
  const handleChangeEmail = (val) => {
    setEmail(val);
    setEnableSubmit(val !== '' && password !== '');
  };

  // password handler
  const handleChangePassword = (val) => {
    setPassword(val);
    setEnableSubmit(email !== '' && val !== '');
  };

  return (
    <>
      <BodySectionWithMarginBottom title='Log in to continue'>
        <div className={`Login ${css(styles.login)}`}>
          <p>Login to access the full dashboard</p>
          <form className={`${css(styles.form)}`}>
            <div className={`${css(styles.labelInput)}`}>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                autoComplete='email'
                value={email}
                onClick={handleChangeEmail}
              ></input>
            </div>
            <div className={`${css(styles.labelInput)}`}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                autoComplete='current-password'
                value={password}
                onClick={handleChangePassword}
              ></input>
            </div>
            <input
              type='submit'
              value='OK'
              className={`${css(styles.button)}`}
              onClick={handleLoginSubmit}
              disabled={!enableSubmit}
            ></input>
          </form>
        </div>
      </BodySectionWithMarginBottom>
    </>
  );
};

const styles = StyleSheet.create({
  login: {
    margin: '30px 30px auto',
  },
  form: {
    display: 'flex',
    '@media screen and (max-width: 900px)': {
      flexDirection: 'column',
    },
  },
  button: {
    maxWidth: 40,
  },
  labelInput: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Login;
