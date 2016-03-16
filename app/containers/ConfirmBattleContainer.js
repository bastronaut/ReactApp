var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router : React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount :function() {
    console.log('componentWillMount');
  },
  componentDidMount: function() {
    console.log('componentDidMount');
     var query = this.props.location.query;
     console.log('QUERY', query);
     // Fetch info from GH and update state
     this.setState({
       isLoading: false
     })

  },
  componentWillReceiveProps: function () {
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  },
  render: function() {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playerInfo}
      />
    );
  }
});


module.exports = ConfirmBattleContainer;
