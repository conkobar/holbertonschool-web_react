import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// import components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

// create listNotifications array
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available', html: undefined },
  { id: 2, type: 'urgent', value: 'New resume available', html: undefined },
  {
    id: 3,
    type: 'urgent',
    value: undefined,
    html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
  },
];

// create listCourses array
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

/* // declare App as a function
const App = ({ isLoggedIn }) => {
  return (
    <>
      <div className='header'>
        <Notifications listNotifications={listNotifications} />
        <Header />
      </div>
      <div className='App-body'>
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      </div>
      <Footer />
    </>
  );
}; */

// declare App as a class
class App extends React.Component {
  // listener to log user out
  logOut() {
    window.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

  // execute when the component successfully mounts
  componentDidMount() {
    // log the user out when they press ctrl+h
    window.addEventListener('keydown', this.logOut());
  }

  // execute when the component unmounts
  componentWillUnmount() {
    window.removeEventListener('keydown', this.logOut());
  }

  render() {
    const { isLoggedIn, logOut } = this.props;
    // Added key={this.props.isLoggedIn} to force re-render of Notifications component
    // This is only necessary because we have the shouldComponentUpdate method in notifications for a different task
    // Also added displayDrawer={isLoggedIn} to tie notifications to isLoggedIn
    return (
      <>
        <div className={`App-header ${css(styles.header)}`}>
          <Notifications
            key={this.props.isLoggedIn}
            listNotifications={listNotifications}
            displayDrawer={isLoggedIn}
          />
          <Header />
        </div>
        <div className={`App-body ${css(styles.body)}`}>
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <BodySection title='News from the School' />
        </div>
        <Footer className={`App-footer ${css(styles.footer)}`} />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

const styles = StyleSheet.create({
  header: {
    borderBottom: '1.5px solid rgb(225, 53, 75)',
  },
  body: {
    minHeight: '30vw',
  },
  footer: {
    borderTop: '1.5px solid rgb(224,53,75)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default App;
