// Database Related Library
var mysql = require('mysql');
var config = require('../configs/config.js');
var connection = mysql.createConnection(config);

// Get All Post Data From Database
exports.get = function(callback) {
    var sql =  'SELECT kp.*, kup.nickname, ku.username FROM keany_post as kp ';
        sql += 'LEFT JOIN keany_user_profile as kup ON (kup.id = kp.user_id) ';
        sql += 'LEFT JOIN keany_user as ku ON (ku.id = kp.user_id) ';
        sql += 'ORDER BY RAND() LIMIT 25';

    connection.query(sql, function (err, rows, fields) {
        if (err) {
            return callback(err);
        }

        callback(null, rows);
    });
};