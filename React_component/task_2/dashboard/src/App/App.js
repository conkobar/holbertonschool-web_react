import './App.css';
import React from 'react';
import PropTypes from 'prop-types';

// import components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

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

export default App;
