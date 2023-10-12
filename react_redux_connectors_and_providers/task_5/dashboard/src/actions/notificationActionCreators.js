import {
  MARK_AS_READ,
  SET_NOTIFICATION_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';
import { bindActionCreators } from 'redux';

export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_NOTIFICATION_FILTER,
    filter,
  };
};

export const setLoadingState = (isLoading) => {
  return {
    type: SET_LOADING_STATE,
    isLoading,
  };
};

export const setNotifications = (notifications) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: notifications,
  };
};

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setNotifications(data));
        dispatch(setLoadingState(false));
      });
  };
};

export const boundNotificationActionCreators = bindActionCreators({
  markAsRead,
  setNotificationFilter,
  setLoadingState,
  setNotifications,
  fetchNotifications,
});
