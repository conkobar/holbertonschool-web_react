import { Map } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const defaultState = Map({
  filter: 'DEFAULT',
  notifications: Map(),
});

export const notificationsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return state.setIn(
        ['notifications', action.payload.id],
        Map(action.payload)
      );
    case 'REMOVE_NOTIFICATION':
      return state.deleteIn(['notifications', action.payload]);
    case 'SET_FILTER':
      return state.set('filter', action.payload);
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedNotifications = notificationsNormalizer(action.payload);
      return state.mergeIn(['notifications'], normalizedNotifications);
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
};
