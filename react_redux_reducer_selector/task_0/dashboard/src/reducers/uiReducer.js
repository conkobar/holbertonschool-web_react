import {
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: true,
  isUserLoggedIn: true,
  user: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
      };

    case LOGOUT:
      return {
        ...state,
        uisUserLoggedIn: false,
      };
    default:
      return state;
  }
};

export default { initialState, appReducer };
