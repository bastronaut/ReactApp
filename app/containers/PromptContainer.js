var React =require('react');

var PromptContainer = React.createClass({
  render: function() {
    console.log(this);
    return (
      <div className="jumbotron col-sm-6 text-center">
      <h1>some text</h1>
        <form>
          <div className="form-group col-sm-12">
            <input
              className="form-control"
              placeholder="username"
              type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-block btn-success"
              type="submit"
            />
          </div>
        </form>

      </div>
    )
  }
})

module.exports = PromptContainer
