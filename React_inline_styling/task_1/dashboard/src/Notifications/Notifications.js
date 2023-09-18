import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  componentDidUpdate() {
    console.log('Component has updated');
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div
        id='container'
        className={css(styles.container)}
        style={css(styles.container)}
      >
        <div
          className={`menuItem ${css(styles.menuItem)}`}
          style={css(styles.menuItem)}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div
            className={`Notifications ${css(styles.notifications)}`}
            style={css(styles.notifications)}
          >
            <img
              src={closeIcon}
              alt='close icon'
              style={{
                height: '15px',
                position: 'absolute',
                top: 10,
                right: 10,
              }}
              aria-label='Close'
              onClick={() => console.log('Close button has been clicked')}
            ></img>

            {listNotifications.length > 0 && (
              <p>Here is the list of notifications</p>
            )}
            <ul>
              {listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                listNotifications.map(({ type, html, value, id }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    html={html}
                    value={value}
                    markAsRead={this.markAsRead}
                    className={css(
                      type === 'default'
                        ? styles.defaultNotification
                        : styles.urgentNotification
                    )}
                    style={css(
                      type === 'default'
                        ? styles.defaultNotification
                        : styles.urgentNotification
                    )}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  notifications: {
    border: '1px dashed rgb(224,53,75)',
    padding: '1%',
    position: 'relative',
  },
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
  container: {
    float: 'right',
  },
  menuItem: {
    textAlign: 'end',
  },
});

export default Notifications;
