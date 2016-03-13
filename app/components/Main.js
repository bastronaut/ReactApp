var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        Hi from Main
        {this.props.children}
      </div>
    )
  }
});

module.exports = Home;
