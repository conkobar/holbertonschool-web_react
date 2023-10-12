import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';
import { bindActionCreators } from 'redux';

export const login = (email, password) => ({
  type: LOGIN,
  user: {
    email,
    password,
  },
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const boundUIActionCreators = bindActionCreators({
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
});

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('http://localhost:3000/login-success.json')
      .then((response) => response.json())
      .then((data) => dispatch(loginSuccess(data.user)))
      .catch((error) => console.log(error));
  };
};
