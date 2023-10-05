import uiReducer from '../reducers/uiReducer';
import {
  SELECT_COURSE,
  DISPLAY_NOTIFICATION_DRAWER,
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    modal: Map({
      isOpen: false,
      content: '',
    }),
    courses: Map({
      CS101: Map({ name: 'Introduction to Computer Science', credit: 3 }),
      ECON101: Map({ name: 'Microeconomics', credit: 3 }),
      PHYS101: Map({ name: 'Physics', credit: 3 }),
    }),
  });

  it('should return the initial state when no action is passed', () => {
    const newState = uiReducer(initialState, {});
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const newState = uiReducer(initialState, {
      type: SELECT_COURSE,
      payload: 'CS101',
    });
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it('should change the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const newState = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(newState.getIn(['isNotificationDrawerVisible'])).toBe(true);
  });
});
