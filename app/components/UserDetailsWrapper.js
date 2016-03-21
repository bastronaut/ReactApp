var React = require('react');
var PropTypes = require('react').PropTypes;

function UserDetailsWrapper(props) {
  return (
    <div className="col-sm-6">
      <p className="lead">Player {props.header}</p>
        {props.children}
    </div>
  )
}

UserDetailsWrapper.PropTypes = {
  header: PropTypes.string
}

module.exports = UserDetailsWrapper;
