var React =require('react');
var transparantBg = require('../styles').transparantBg;

var PromptContainer = React.createClass({
  contextTypes : {
    router : React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    }
  },

  onUpdateUser : function (e) {
    this.setState({
      username: e.target.value
    })
  },
  onSubmitUser : function (e) {
    // Player one and two have been inserted, going to /battles
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username : ''
    })
    console.log(this.context);
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // Player one not been inserted yet, go to /playerTwo
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function() {
    return (
      <div className="jumbotron col-sm-6 text-center" style={transparantBg}>
      <h1>{this.props.route.header}</h1>
        <form>
          <div className="form-group col-sm-12">
            <input
              className="form-control"
              placeholder="username"
              type="text"
              onChange={this.onUpdateUser}
              value={this.state.username}
              />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit"
              onClick={this.onSubmitUser}
            >
            Submit
          </button>
          </div>
        </form>

      </div>
    )
  }
})

module.exports = PromptContainer
