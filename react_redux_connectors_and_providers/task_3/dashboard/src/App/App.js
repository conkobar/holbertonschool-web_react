import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from '../actions/uiActionCreators';
import { appReducer } from '../reducers/uiReducer';

// import components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import AppContext from './AppContext';

// create listCourses array
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

// create a React app
class App extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  markNotificationAsRead(id) {
    const { listNotifications } = this.state;
    this.setState({
      listNotifications: listNotifications.filter((item) => {
        item.id !== id;
      }),
    });
  }

  handleKeyDown = (event) => {
    console.log('A key was pressed', event.key);
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { user, listNotifications, login } = this.props;
    const { displayDrawer } = this.props;

    return (
      <>
        <AppContext.Provider value={{ user, logOut: this.props.logOut }}>
          <div className={`App-header ${css(styles.header)}`}>
            <Notifications
              listNotifications={listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
              markNotificationAsRead={this.props.markNotificationAsRead}
            />
            <Header />
          </div>
          <div className={`App-body ${css(styles.body)}`}>
            {user.isLoggedIn ? (
              <CourseList listCourses={listCourses} />
            ) : (
              <Login logIn={login} />
            )}
            <BodySection title='News from the School'>
              <p>React stuff</p>
            </BodySection>
          </div>
          <Footer className={`App-footer ${css(styles.footer)}`} />
        </AppContext.Provider>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  login: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
  markNotificationAsRead: () => {},
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  login: () => {},
};

// styles for components
const styles = StyleSheet.create({
  footer: {
    borderTop: '1.5px solid rgb(224,53,75)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  body: {
    minHeight: '30vw',
  },
  header: {
    borderBottom: '1.5px solid rgb(225, 53, 75)',
  },
});

// connects appReducer to isLoggedIn property of App component
const mapStateToProps = (state) => {
  isLoggedIn: state && state.appReducer && state.appReducer.isUserLoggedIn;
  displayDrawer: state &&
    state.appReducer &&
    state.appReducer.isNotificationDrawerVisible;
};

// create dispatch handler for notification drawer
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
