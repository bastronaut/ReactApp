var React = require('react');
var styles = require('../styles/index.js')
var Link = require('react-router').Link;
var PropTypes = require('react').PropTypes;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');


function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}


function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparantBg}>
      <h1>Confirm players</h1>
      <div className="col-sm-8 col-sm-offset-2">

        <UserDetailsWrapper header="1">
          <UserDetails info={props.playersInfo[0]} score={5} />
        </UserDetailsWrapper>

        <UserDetailsWrapper header="2">
          <UserDetails info={props.playersInfo[1]} score={1} />
        </UserDetailsWrapper>

      </div>

      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-6">
          <button className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>Initiate battle</button>
        </div>

        <div className="col-sm-6">
          <Link to='/playerOne'>
          <button className="btn btn-lg btn-danger">Restart</button>
          </Link>
        </div>
      </div>

    </div>

}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
