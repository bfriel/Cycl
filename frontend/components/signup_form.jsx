"use strict";

const React = require('react'),
 		  Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store'),
      ErrorStore = require('../stores/error_store');

const SignupForm = React.createClass({

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
    SessionActions.signUp(this.state);
	},

	_guestLogin(e) {
		e.preventDefault();
		const demoUser = {username: 'Haley', password: 'password'};
		SessionActions.logIn(demoUser);
	},

  fieldErrors(field) {
    let errors = ErrorStore.formErrors(this.formType());
    if (!errors[field]) { return; }

    let messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ field } { errorMsg } </li>;
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
			<div className="signup-page-container">
				<div className="landing-title">
					<h1>Cycl</h1>
				</div>
				<div className="list-errors">
					{ this.fieldErrors("base") }
					{ this.fieldErrors("username") }
					{ this.fieldErrors("password") }
				</div>
				<div className="signup-form-container">
					<form className="signup-form-box" onSubmit={this.handleSubmit}>
		        <h3>Sign Up</h3>
						<br/>

						<div className="signup-form">

			        <br />

							<label for="user_username"> Username: </label>
								<input type="text"
			            value={this.state.username}
			            onChange={this.update("username")}
									autoFocus
									className="signup-input"
									id="user_username" />


			        <br />

							<label for="user_password"> Password: </label>
			          <input type="password"
			            value={this.state.password}
			            onChange={this.update("password")}
									className="signup-input"
									id="user_password" />

	            <br />

							<input type="submit" value="Sign Up!" />
							<input type="submit" value="Continue as Guest" onClick={this._guestLogin} />
						</div>
						<div className="switch-form">
							Already have an account? <Link to="/login">Log In!</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = SignupForm;
