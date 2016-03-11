var React = require('react');
var ReactDOM = require('react-dom');

var user = {
  'name' : 'bas',
  'githubusername' : 'bastronaut',
  'homepage' : 'bastronaut.com'
}

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>{this.props.name}</div>
    )
  }
})

var Github = React.createClass({
  render: function() {
    return(
      <div>
        <a href={"http://www.github.com/"+ this.props.githubusername}>Github</a>
      </div>
    )
  }
})

var Website = React.createClass({
  render: function() {
    return (
      <div>
        <a href={"http://www."+ this.props.homepage}>{this.props.homepage}</a>
      </div>
    )
  }
})

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfileName name={this.props.user.name} />
        <Github githubusername={this.props.user.githubusername} />
        <Website homepage={this.props.user.homepage} />
      </div>
    )
  }
})


ReactDOM.render(
  <Avatar user={user}/>,
  document.getElementById('app')
);
