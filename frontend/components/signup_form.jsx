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
      password: "",
      height: 0,
      weight: 0,
      gender: "",
      birthdate: Date.now()
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
    if (property === "height" || property === "weight") {
      return (e) => this.setState({[property]: parseInt(e.target.value)});
    } else if (property === "date") {
      return (e) => this.setState({[property]: new Date(e.target.value)});
    } else {
      return (e) => this.setState({[property]: e.target.value});
    }
  },

	render() {

		return (
			<div className="splash">
				<div className="signup-container">
					<form className="signup-form-box" onSubmit={this.handleSubmit}>
		        <h3>Sign Up</h3>
						<br/>

		        { this.fieldErrors("base") }

						<div className="signup-form">

			        <br />

							<label for="user_username"> Username: </label>
			          { this.fieldErrors("username") }
								<input type="text"
			            value={this.state.username}
			            onChange={this.update("username")}
									className="signup-input"
									id="user_username" />


			        <br />

							<label for="user_password"> Password: </label>
			          { this.fieldErrors("password") }
			          <input type="password"
			            value={this.state.password}
			            onChange={this.update("password")}
									className="signup-input"
									id="user_password" />

	            <br />

	              <label for="user_height"> Height: </label>
	              <select onChange={this.update("height")} className="signup-input" id="user_height">
	                <option value="4">4</option>
	                <option value="5">5</option>
	                <option value="6">6</option>
	                <option value="7">7</option>
	              </select>

	            <br />

	              <label for="user_weight"> Weight: </label>
	              <input type="number"
	              value={this.state.weight}
	              onChange={this.update("weight")}
	              min="0"
	              max="500"
	              step="1"
	              className="signup-input"
	              id="user_weight" />

	            <br />

	              <label for="user_gender"> Gender: </label>
	              <input type="radio"
	                onChange={this.update("gender")}
	                value="M"
	                className="signup-input"
	                id="user_gender" />Male
	              <input type="radio"
	                onChange={this.update("gender")}
	                value="F"
	                className="signup-input"
	                id="user_gender" />Female

	            <br />

	              <label for="birthdate"> Birthdate: </label>
	              <input type="date"
	                     onChange={this.update("birthdate")}
	                     id="user_birthdate"
	                     className="signup-input" />

			        <br />
							<input type="submit" value="Sign Up!" />
						</div>
						Already have an account? <Link to="/login">Log In!</Link>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = LoginForm;
