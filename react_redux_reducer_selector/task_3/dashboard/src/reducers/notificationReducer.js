import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

export const notificationsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case FETCH_NOTIFICATIONS_SUCCESS:
      const updatedNotifications = action.payload.map((notification) => {
        return {
          ...notification,
          isRead: false,
        };
      });
      return {
        ...state,
        notifications: updatedNotifications,
      };
    case MARK_AS_READ:
      const index = action.index;
      const notifications = state.notifications.map((notification) => {
        if (notification.id === index) {
          return {
            ...notification,
            isRead: true,
          };
        }
        return notification;
      });
      return {
        ...state,
        notifications,
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};
