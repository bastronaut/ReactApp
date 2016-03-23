var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var TestConstants = require('../utils/TestConstants');

var CHANGE_EVENT = 'change';

var _objectwithstuff = {};

function create(text) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _objectwithstuff[id] = {
    id: id,
    stuffed: false,
    text: text
  };
}

function deleteStuff(id) {
  delete _objectwithstuff[id];
}

var TestStore = objectAssign({}, EventEmitter.prototype, {
  getAll: function() {
    return _objectwithstuff;
  },

  emitChange: function() {
    console.log('EMIT CHAGNE!');
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case TestConstants.STUFF_CREATE:
      text = action.text.trim();
      create(text);
      TestStore.emitChange();
      break;

    case TestConstants.STUFF_DELETE:
      deleteStuff(action.id);
      TestStore.emitChange();
      break;

    default:
     //nope
  }
});

module.exports = TestStore;
