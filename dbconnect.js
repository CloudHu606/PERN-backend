const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: 5432,
    database: process.env.DB,
})

module.exports = pool;