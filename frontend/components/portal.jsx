"use strict";

const React = require('react'),
 		  Link = require('react-router').Link,
      hashHistory = require('react-router').hashHistory;
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
      password: "",
      type: this.props.route.type
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

  componentWillReceiveProps() {
    this.setState({
      type: this.props.route.type
    });
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

	handleSubmit(e) {
    e.preventDefault();
    if (this.state.type === "signup") {
      SessionActions.signUp(this.state);
    } else {
      SessionActions.logIn(this.state);
    }
	},

	_guestLogin(e) {
		e.preventDefault();
		const demoUser = {username: 'Haley', password: 'password'};
		SessionActions.logIn(demoUser);
	},

  fieldErrors(field) {
    let errors = ErrorStore.formErrors(this.state.type);

    if (!errors[field]) { return; }

    let messages;
    if (this.state.type === "login") {
      messages = errors[field].map( (errorMsg, i) => {
        return <li key={ i }>{ errorMsg }</li>;
      });
    } else {
      messages = errors[field].map( (errorMsg, i) => {
        return <li key={ i }>{ field } { errorMsg } </li>;
        });
    }

    return <ul>{ messages }</ul>;
  },

  // formType() {
  //   return this.props.location.pathname.slice(1);
  // },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  _switchForm(type) {
    this.setState({
      type: type
    });
  },

	render() {
    let otherFormLink;
    let formButtonText;
    if (this.state.type === "login") {
      otherFormLink = <div className="switch-form">
                        New to Cycl? <a onClick={this._switchForm.bind(null, "signup")}>Sign Up!</a>
                      </div>;
      formButtonText = "Log In!";
    } else {
      otherFormLink = <div className="switch-form">
                        Already have an account? <a onClick={this._switchForm.bind(null, "login")}>Log In!</a>
                      </div>;
      formButtonText = "Sign Up!";
    }
		return (
			<div className="entry-page-container">
				<div className="landing-title">
					<h1>Cycl</h1>
				</div>
        <div className="tagline">
          <p>Connect with friends and make the most of your rides</p>
        </div>
				<div className="entry-form-container">
					<form className="entry-form-box" onSubmit={this.handleSubmit}>
            <div className="list-errors">
              { this.fieldErrors("base") }
              { this.fieldErrors("username") }
              { this.fieldErrors("password") }
            </div>
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
									id="user_password" />

	            <br />

							<input type="submit" value={formButtonText} />
							<input type="submit" value="Guest Login" onClick={this._guestLogin} />
						</div>
						{otherFormLink}
					</form>
				</div>
			</div>
		);
	}
});

module.exports = SignupForm;
