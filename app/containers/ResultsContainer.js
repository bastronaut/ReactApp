var React = require('react');
var PropTypes = require('react').PropTypes;
var Results = require('../components/Results');

var ResultsContainer = React.createClass({
  contextTypes : {
    router: React.PropTypes.object.isRequired
  },
  getInitialState : function() {
    return {
      loading: true,
      playersInfo: this.props.location.playersInfo
    };
  },
  render: function() {
    return (
      <Results playersInfo={this.props.playersInfo} />
    );
  }
});

module.exports = ResultsContainer;
