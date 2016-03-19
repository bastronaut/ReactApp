var axios = require('axios');

var id = 'API_KEY';
var secid = 'API_SECRET';
var param = '?client_id=' + id + '?client_secret' + secid;

// axios.get() returns a promise
function getUserInfo (username) {
  return axios.get('http://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function (players) {
    // axios.all() takes array of promises and runs .then on complete
      return axios.all(players.map(function(username) {
        return getUserInfo(username);
      })).then(function (usersinfo) {
        console.log(usersinfo);
        return usersinfo.map(function (user) {
          return user.data;
        });
      }).catch(function (err) {
          console.warn('err;', err);
      });
  }
};

module.exports = helpers;
