import { Map } from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const defaultState = Map({
  filter: 'DEFAULT',
  notifications: Map(),
  loading: false,
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
      return state.mergeDeep({
        notifications: normalizedNotifications,
        loading: false,
      });
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case SET_LOADING_STATE:
      return state.set('loading', action.payload);
    default:
      return state;
  }
};
