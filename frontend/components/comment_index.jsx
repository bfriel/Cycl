const React = require('react'),
      CommentForm = require('./comment_form'),
      CommentIndexItem = require('./comment_index_item');

const CommentIndex = React.createClass({

  render(){
    return (
      <div>
        <ul className="comment-index" >
          {
            this.props.ride.comments.map( (comment) => {
              return <CommentIndexItem comment={comment} key={comment.id} />;
            })
          }
        </ul>
        <CommentForm ride={this.props.ride} />
      </div>
    );
  }
});

module.exports = CommentIndex;
