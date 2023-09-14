import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const NotificationItem = ({ type, html, value, markAsRead }) => {
  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={markAsRead}
      />
    );
  }
  return <li data-notification-type={type}>{value}</li>;
};

NotificationItem.propTypes = {
  listCourses: PropTypes.arrayOf(NotificationItemShape),
  markAsRead: PropTypes.number,
};

NotificationItem.defaultProps = {
  listCourses: [],
  markAsRead: 0,
};

export default NotificationItem;
