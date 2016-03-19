var React = require('react');
var PropTypes = require('react').PropTypes;

function UserDetails (user) {
  return (

  )
}

// shapes allows to pass object and get proptypes based on Key Values in object.
// Note: proptypes are not required in all cases
UserDetails.PropTypes = {
  score: PropTypes.number,
  info : PropTypes.shapes({

  })
}

module.exports = UserDetails;
