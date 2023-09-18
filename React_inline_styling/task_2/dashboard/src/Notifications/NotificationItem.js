import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

// Used React.memo instead of PureComponent since NotificationItem is a
// functional component.
const NotificationItem = React.memo(({ type, html, value, markAsRead, id }) => {
  const className = type === 'default' ? styles.default : styles.urgent;

  if (html) {
    return (
      <li
        className={css(className)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
        style={css(className)}
      />
    );
  }
  return (
    <li
      className={css(className)}
      data-notification-type={type}
      onClick={() => markAsRead(id)}
      style={css(className)}
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

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

export default NotificationItem;
