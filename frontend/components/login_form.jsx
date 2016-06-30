"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: ""
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

	handleSubmit(e) {
		e.preventDefault();
    SessionActions.logIn(this.state);
	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

	render() {

		return (
			<div className="login-page-container">
				<div className="landing-title">
					<h1>Cycl</h1>
				</div>
				<div className="list-errors">
					{ this.fieldErrors("base") }
				</div>
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
		        <h3>Log In</h3>
						<br/>

						<div className="login-form">
			        <br />
							<label for="user_username"> Username: </label>
			          { this.fieldErrors("username") }
								<input type="text"
			            value={this.state.username}
			            onChange={this.update("username")}
									autoFocus
									className="login-input"
									id="user_username" />


			        <br />
							<label for="user_password"> Password: </label>
			          { this.fieldErrors("password") }
			          <input type="password"
			            value={this.state.password}
			            onChange={this.update("password")}
									className="login-input"
									id="user_password"/>


			        <br />
							<input type="submit" value="Log In!" />
						</div>
						<div className="switch-form">
							New to Cycl? <Link to="/signup">Sign Up!</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = LoginForm;
