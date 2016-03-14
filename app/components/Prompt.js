var React = require('react');
var transparantBg = require('../styles').transparantBg;


var Prompt = React.createClass({
  proptYpes: {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.string.isRequired,
  },
  render: function () {
    return (
      <div className="jumbotron col-sm-6 text-center" style={transparantBg}>
        <h1>{this.props.header}</h1>
        <form>
          <div className="form-group col-sm-12">
            <input
              className="form-control"
              placeholder="username"
              type="text"
              onChange={this.props.onUpdateUser}
              value={this.props.username}
              />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit"
              onClick={this.props.onSubmitUser}
            >
            Submit
          </button>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = Prompt;
