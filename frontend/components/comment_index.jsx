const React = require('react'),
      CommentForm = require('./comment_form'),
      RidesStore = require('../stores/rides'),
      CommentIndexItem = require('./comment_index_item');

const CommentIndex = React.createClass({

  getInitialState(){
    return {
      ride: this.props.ride,
      rideId: this.props.ride.ride_id
    };
  },

  componentDidMount(){
    this.ridesListener = RidesStore.addListener(this._onChange);
  },

  componentWillUnmount(){
    this.ridesListener.remove();
  },

  _onChange(){
    this.setState({
      ride: RidesStore.findOldRide(this.state.rideId)
    });
  },

  render(){
    return (
      <div id="all-comment-container">
        <ul className="comment-index" >
          {
            this.state.ride.comments.map( (comment) => {
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
