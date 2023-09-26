import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// import components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import AppContext from './AppContext';

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

const defState = {
  displayDrawer: null,
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...defState };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
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
    const { displayDrawer, user, logOut } = this.state;
    // Added key={this.props.isLoggedIn} to force re-render of Notifications component
    //  This is only necessary because we have the shouldComponentUpdate method in notifications for a different task
    // Also added displayDrawer={isLoggedIn} to tie notifications to isLoggedIn
    return (
      <>
        <AppContext.Provider value={{ user, logOut }}>
          <div className={`App-header ${css(styles.header)}`}>
            <Notifications
              listNotifications={listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
            <Header />
          </div>
          <div className={`App-body ${css(styles.body)}`}>
            {user.isLoggedIn ? (
              <CourseList listCourses={listCourses} />
            ) : (
              <Login logIn={this.logIn} />
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
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

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

export default App;
