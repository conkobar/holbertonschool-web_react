import React, { PureComponent } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  componentDidUpdate() {
    console.log('Component has updated');
  }

  render() {
    const { displayDrawer, messages, handleDisplayDrawer, handleHideDrawer } =
      this.props;

    return (
      <div id='container' className={css(styles.container)}>
        <div
          className={`menuItem ${css(styles.menuItem)} ${css(
            styles.fadeBounce
          )}`}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={`Notifications ${css(styles.notifications)}}`}>
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
              onClick={handleHideDrawer}
            ></img>
            {messages.length > 0 && <p>Here is the list of notifications</p>}
            <ul className={css(styles.list)}>
              {messages.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                messages.map(({ type, html, value, id }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    html={html}
                    value={value}
                    markNotificationAsRead={this.markNotificationAsRead}
                    className={`notification-item ${css(
                      type === 'default'
                        ? styles.defaultNotification
                        : styles.urgentNotification
                    )}`}
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
  messages: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  fetchNotifications: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  messages: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  fetchNotifications: () => {},
};

const styles = StyleSheet.create({
  notifications: {
    border: '1px dashed rgb(224,53,75)',
    padding: '1%',
    position: 'relative',
    '@media screen and (max-width: 900px)': {
      fontSize: 20,
      padding: 0,
      border: 'none',
    },
  },

  defaultNotification: {
    color: 'blue',
  },

  urgentNotification: {
    color: 'red',
  },

  container: {
    float: 'right',
    '@media screen and (max-width: 900px)': {
      float: 'unset',
    },
  },

  menuItem: {
    textAlign: 'end',
    '@media screen and (max-width: 900px)': {
      display: 'none',
    },
  },

  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },

  fadeBounce: {
    ':hover': {
      animationName: [
        {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(5px)' },
        },
      ],
      animationDuration: ['1s', '0.5s'],
      animationIterationCount: ['infinite', '3'],
    },
  },
});

const mapStateToProps = (state) => ({
  messages: state.notifications,
});

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
