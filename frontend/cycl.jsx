const React = require('react'),
      ReactDOM = require('react-dom'),
      Router = require('react-router').Router,
      Route = require('react-router').Route,
      IndexRoute = require('react-router').IndexRoute,
      hashHistory = require('react-router').hashHistory,
      App = require('./components/app'),
      Feed = require('./components/feed'),
      UserPage = require('./components/user_page'),
      LoginForm = require('./components/login_form'),
      SignupForm = require('./components/signup_form'),
      SessionStore = require('./stores/session_store'),
      SessionActions = require('./actions/session_actions');

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Feed}/>
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
    <Route path="user/:userId" component={UserPage} onEnter={ _ensureLoggedIn } />
  </Route>
);

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
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
