"use strict";

const React = require('react'),
      Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions'),
      SessionStore = require('../stores/session_store'),
      ErrorStore = require('../stores/error_store');

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

	_guestLogin(e) {
		e.preventDefault();
		const demoUser = {username: 'Haley', password: 'password'};
		SessionActions.logIn(demoUser);
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
			<div className="entry-page-container">
				<div className="landing-title">
					<h1>Cycl</h1>
				</div>
				<div className="entry-form-container">
          <div className="list-errors">
            { this.fieldErrors("base") }
            { this.fieldErrors("username") }
            { this.fieldErrors("password") }
          </div>
					<form onSubmit={this.handleSubmit} className="entry-form-box">
						<br/>

						<div className="entry-form">
			        <br />
								<input type="text"
			            value={this.state.username}
			            onChange={this.update("username")}
									autoFocus
									className="entry-input"
                  placeholder="Username"
									id="user_username" />


			        <br />
			          <input type="password"
			            value={this.state.password}
			            onChange={this.update("password")}
									className="entry-input"
                  placeholder="Password"
									id="user_password"/>


			        <br />
							<input type="submit" value="Log In!" />
							<input type="submit" value="Guest Login" onClick={this._guestLogin} />
						</div>
						<div className="switch-form">
							New to Cycl? <Link to="/signup" className="switch-link">Sign Up!</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = LoginForm;
