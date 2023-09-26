import React from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

const Login = () => (
  <>
    <BodySectionWithMarginBottom title='Log in to continue'>
      <div className={`Login ${css(styles.login)}`}>
        <p>Login to access the full dashboard</p>
        <form className={`${css(styles.form)}`}>
          <div className={`${css(styles.labelInput)}`}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              autoComplete='email'
            ></input>
          </div>
          <div className={`${css(styles.labelInput)}`}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              autoComplete='current-password'
            ></input>
          </div>
          <button className={`${css(styles.button)}`}>OK</button>
        </form>
      </div>
    </BodySectionWithMarginBottom>
  </>
);

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
