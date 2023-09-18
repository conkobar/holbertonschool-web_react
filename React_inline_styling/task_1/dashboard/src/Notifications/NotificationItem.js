import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

// Used React.memo instead of PureComponent since NotificationItem is a
// functional component.
const NotificationItem = React.memo(({ type, html, value, markAsRead, id }) => {
  if (html) {
    return (
      <li
        className='notification-item'
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      />
    );
  }
  return (
    <li
      className='notification-item'
      data-notification-type={type}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
});

NotificationItem.propTypes = {
  ...NotificationItemShape.propTypes,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
