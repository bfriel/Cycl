const React = require('react'),
      hashHistory = require('react-router').hashHistory;


const CommentIndexItem = React.createClass({
  _goToUsersPage() {
    hashHistory.push('user/' + this.props.comment.user_id);
  },

  render(){
    return(
      <li className="comment-item">
        <span className="comment-author underline" onClick={this._goToUsersPage}>
          {this.props.comment.author}
        </span>
        :{' '}
        <span className="comment-body">
          {this.props.comment.body}
        </span>
      </li>
    );
  }
});

module.exports = CommentIndexItem;
