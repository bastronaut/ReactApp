var AppDispatcher = require('../dispatcher/AppDispatcher');
var TestConstants = require('../utils/TestConstants');

var TestActions = {
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: TestConstants.STUFF_CREATE,
      text: text
    });
  },
  delete: function(id) {
    AppDispatcher.dispatch({
      actionType: TestConstants.STUFF_DELETE,
      id: id
    });
  }
};

module.exports = TestActions;
