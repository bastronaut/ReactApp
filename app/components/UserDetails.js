var React = require('react');
var PropTypes = require('react').PropTypes;

function UserDetails (user) {
  return (
    <div>
    {/*!! checks for presence of user.score*/}
      {!!user.score && <li className="list-group-item"><h3>Score: {user.score}</h3></li>}
      <li className="list-group-item"><img src={user.info.avatar_url} className="img-rounded img-responsive"/></li>
      <li className="list-group-item">Url: {user.info.html_url}</li>
      <li className="list-group-item">Followers: {user.info.followers}</li>
    </div>
  )
}

// shapes allows to pass object and get proptypes based on Key Values in object.
// Note: proptypes are not required in all cases
UserDetails.PropTypes = {
  score : PropTypes.number,
  info : PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired
  })
}

module.exports = UserDetails;
