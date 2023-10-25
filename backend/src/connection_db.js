const { Pool } = require('pg')

const pool = new Pool({
    user: 'pgadmin',
    password: 'pg123',
    host: 'postgres',
    port: 5432,
    database: 'user_db'
})

module.exports = pool
