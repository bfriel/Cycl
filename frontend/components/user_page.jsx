const React = require('react'),
      ApiUtil = require('../util/api_util'),
      RidesStore = require('../stores/rides');

const UserPage = React.createClass({
  getInitialState(){
    return {
      rides: RidesStore.find(parseInt(this.props.params.userId))
    };
  },

  componentDidMount() {
    ApiUtil.fetchRides();
    this.rideListener = RidesStore.addListener(this._onChange);
  },

  _onChange(){
    this.setState({
      rides: RidesStore.find(parseInt(this.props.params.userId))
    });
  },

  componentWillReceiveProps() {
    this.setState({
      rides: RidesStore.find(parseInt(this.props.params.userId))
    });
  },

  render() {
    let rides = this.state.rides.map( (ride) => {
      return <div key={ride.id}>{ride.ride_name}</div>;
    });
    return (
      <div>
        <div className="greeting">
          Hello from user page
        </div>
        <div className="showallrides">
          {rides}
        </div>
      </div>
    );
  }
});

module.exports = UserPage;
