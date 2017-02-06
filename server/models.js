var db = require('../db');
var bcrypt = require('bcryptjs');

module.exports = {
  tours: {
    getAll: function(callback) {
      // fetch all tours for main page (most recent 6)
      var queryStr = 'SELECT * FROM TOURS';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    getOne: function(id, callback) {
      var queryStr = 'SELECT * FROM TOURS WHERE id=' + id;
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      // create a tour for a userid for a given username
      var queryStr = 'INSERT INTO tours SET ?'
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
  users: {
    get: function(username, callback) {
      console.log('inside models/users/get', username);
      var queryStr = 'SELECT * FROM USERS WHERE username="' + username +'"';
      db.query(queryStr, function(err, result) {
        callback(err, result);
      });
    },
    post: function(params, callback) {
      var username = params.username;
      var password = params.password;

      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          var queryStr = `INSERT INTO USERS ('username', 'password') VALUES (${username}, ${hash})`;
          db.query(queryStr, function(err, result) {
            callback(err, result);
          });
        });
      });
    },
    check: function(params, callback) {
      var username = params.username;
      var password = params.password;

      get(username)

    }
  },
  reviews: {}
}