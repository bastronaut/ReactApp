var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router : React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    console.log('getInitialState');
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount :function() {
    console.log('componentWillMount');
  },
  componentDidMount: function() {
    console.log('componentDidMount');
     var query = this.props.location.query;
     // Fetch info from GH and update state
     githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        console.log('players: ', players);
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this)) // Set the outer context (react) so this.setState works
  },
  componentWillReceiveProps: function () {
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  },
  handleInitiateBattle: function () {
    console.log('initiating battle');
    this.context.router.push({
      pathname: '/results',
      playersInfo: this.state.playersInfo
    })
  },
  render: function() {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo}
      onInitiateBattle={this.handleInitiateBattle}
      />
    );
  }
});


module.exports = ConfirmBattleContainer;
