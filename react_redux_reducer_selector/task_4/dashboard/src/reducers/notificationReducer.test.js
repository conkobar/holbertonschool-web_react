import notificationReducer from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      notifications: [],
    };
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notifications = [
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
    ];
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: notifications,
    };
    const expectedState = {
      notifications,
    };
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });
});
