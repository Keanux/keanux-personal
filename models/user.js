// Database Related Library
var mysql = require('mysql');
var config = require('../configs/config.js');
var connection = mysql.createConnection(config);

// Get All User Data From Database
exports.get = function (callback) {
    var sql = 'SELECT * ' +
              'FROM keany_user';

    connection.query(sql, function (err, rows, fields) {
        if (err) {
            return callback(err);
        }

        callback(null, rows);
    });
};