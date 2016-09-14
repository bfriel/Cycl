const React = require('react'),
      ApiUtil = require('../util/api_util'),
      SessionStore = require('../stores/session_store');

const CommentForm = React.createClass({

  getInitialState() {
    return {
      body: "",
      currentUser: SessionStore.currentUser()
    };
  },

  _updateComment(e) {
    this.setState({
      body: e.target.value
    });
   },

  _submitWithEnterKey(e) {
   if (e.keyCode === 13) {
<<<<<<< HEAD
     this.handleSubmit(e);
     this.setState({
       body: ""
     });
   }
 },

  handleSubmit(e) {
    e.preventDefault();
    let comment = { body: this.state.body,
                   author: this.state.currentUser.username,
                   user_id: this.state.currentUser.id,
                   ride_id: this.props.ride.ride_id };
    ApiUtil.createComment(comment, () => {
      this.setState({
        body: ""
      });
    });
=======
     e.preventDefault();
     let comment = { body: this.state.body,
                    author: this.state.currentUser.username,
                    user_id: this.state.currentUser.id,
                    ride_id: this.props.ride.ride_id };
     ApiUtil.createComment(comment, () => {this.setState( {body: ""} );} );
   }
>>>>>>> inline-block
  },

  render() {
    return(
<<<<<<< HEAD
      <div className="new-comment-form-container">
        <form className="new-comment-form"
              onSubmit={this.handleSubmit}>
          <input type="text"
                value={this.state.body}
                placeholder="Write a comment..."
                onChange={this._updateComment}
                onKeyDown={this._submitWithEnterKey}
                id="new-comment-input" >
          </input>
        </form>
      </div>
=======
      <form className="new-comment-form">
        <input type="text"
          value={this.state.body}
          placeholder="Write a comment..."
          onChange={this._updateComment}
          onKeyDown={this._submitWithEnterKey}
          id="new-comment-input" >
        </input>
      </form>
>>>>>>> inline-block
    );
  }
});

module.exports = CommentForm;
