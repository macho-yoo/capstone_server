const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'capstone-db.cmbqgzlexu8d.us-east-1.rds.amazonaws.com',
    user: 'master',
    port: '3306',
    password: 'cap989900!!',
    database: 'capstone_db'
});

module.exports = {
    pool: pool
};