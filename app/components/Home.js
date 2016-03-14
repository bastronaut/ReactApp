var React = require('react');
var transparantBg = require('../styles').transparantBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-sm-6 text-center" style={transparantBg}>
        <h1>github battle</h1>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Start</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
