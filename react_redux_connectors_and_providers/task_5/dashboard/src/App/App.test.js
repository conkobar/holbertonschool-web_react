import React from 'react';
import { shallow, mount } from 'enzyme';
import { App, mapStateToProps } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { appReducer } from '../reducers/uiReducer';

StyleSheetTestUtils.suppressStyleInjection();

describe('App Component before login', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = mount(<App />);
    wrapper.setState({
      user: {
        isLoggedIn: false,
      },
    });
  });

  // Test that App renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that App renders a div with the class App-header
  it('renders a div with class App-header', () => {
    describe('appReducer', () => {
      it('should return the initial state', () => {
        expect(appReducer(undefined, {})).toEqual(initialState);
      });

      it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        const expectedState = initialState.set(
          'isNotificationDrawerVisible',
          true
        );
        expect(appReducer(initialState, action)).toEqual(expectedState);
      });

      it('should handle HIDE_NOTIFICATION_DRAWER', () => {
        const action = { type: HIDE_NOTIFICATION_DRAWER };
        const expectedState = initialState.set(
          'isNotificationDrawerVisible',
          false
        );
        expect(appReducer(initialState, action)).toEqual(expectedState);
      });

      it('should handle LOGIN_SUCCESS', () => {
        const action = { type: LOGIN_SUCCESS };
        const expectedState = initialState.set('isUserLoggedIn', true);
        expect(appReducer(initialState, action)).toEqual(expectedState);
      });

      it('should handle LOGIN_FAILURE', () => {
        const action = { type: LOGIN_FAILURE };
        const expectedState = initialState.set('isUserLoggedIn', false);
        expect(appReducer(initialState, action)).toEqual(expectedState);
      });

      it('should handle LOGOUT', () => {
        const action = { type: LOGOUT };
        const expectedState = initialState
          .set('isUserLoggedIn', false)
          .set('user', Map({}));
        expect(appReducer(initialState, action)).toEqual(expectedState);
      });
    });
  });
});
