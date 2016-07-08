const React = require('react'),
      ReactDOM = require('react-dom');
//Router
const Router = require('react-router').Router,
      Route = require('react-router').Route,
      IndexRoute = require('react-router').IndexRoute,
      hashHistory = require('react-router').hashHistory;
//Components
const App = require('./components/app'),
      Feed = require('./components/feed'),
      UserPage = require('./components/user_page'),
      CreateRide = require('./components/map/create_ride'),
      SignupForm = require('./components/signup_form'),
      ShowRide = require('./components/map/show_ride'),
      LoginForm = require('./components/login_form');
//Flux
const SessionStore = require('./stores/session_store'),
      RidesStore = require('./stores/rides'),
      SessionActions = require('./actions/session_actions');

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Feed} onEnter={ _ensureLoggedIn }/>
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
    <Route path="create_ride" component={CreateRide} />
    <Route path="user/:userId" component={UserPage} onEnter={ _ensureLoggedIn } />
    <Route path="ride/:rideId" component={ShowRide} onEnter={ _ensureLoggedIn } />
  </Route>
);

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/signup');
    }
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});

window.SessionStore = SessionStore;
