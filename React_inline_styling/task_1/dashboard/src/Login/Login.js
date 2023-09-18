import React from 'react';

// styling for login component
const Login = () => (
  <>
    <BodySectionWithMarginBottom title='Log in to continue'>
      <div className={`Login ${css(styles.login)}`} style={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            autoComplete='email'
          ></input>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            autoComplete='true'
          ></input>
          <button>OK</button>
        </form>
      </div>
    </BodySectionWithMarginBottom>
  </>
);

const styles = StyleSheet.create({
  login: {
    margin: '30px 30px auto',
  },
});

export default Login;
