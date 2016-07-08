const React = require('react');

const CommentIndexItem = React.createClass({

  render(){
    return(
      <li className="comment-item">
        <div className="comment-author">
          {this.props.comment.author}
        </div>
        <div className="comment-body">
          {this.props.comment.body}
        </div>
      </li>
    );
  }
});

module.exports = CommentIndexItem;
