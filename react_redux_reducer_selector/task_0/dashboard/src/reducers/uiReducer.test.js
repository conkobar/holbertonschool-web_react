import uiReducer from '../reducers/uiReducer';
import {
  SELECT_COURSE,
  DISPLAY_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    modal: {
      isOpen: false,
      content: '',
    },
    courses: {
      CS101: { name: 'Introduction to Computer Science', credit: 3 },
      ECON101: { name: 'Microeconomics', credit: 3 },
      PHYS101: { name: 'Physics', credit: 3 },
    },
  };

  it('should return the initial state when no action is passed', () => {
    const newState = uiReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const newState = uiReducer(initialState, {
      type: SELECT_COURSE,
      payload: 'CS101',
    });
    expect(newState).toEqual(initialState);
  });

  it('should change the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const newState = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(newState.isNotificationDrawerVisible).toBe(true);
  });
});
