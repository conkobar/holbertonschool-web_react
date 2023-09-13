import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const NotificationItem = ({ type, html, value }) => {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={html} />;
  }
  return <li data-notification-type={type}>{value}</li>;
};

NotificationItem.propTypes = {
  listCourses: PropTypes.arrayOf(NotificationItemShape),
};

export default NotificationItem;
