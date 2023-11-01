const { Pool } = require('pg');
const config = {
  development: {
    database: {
      host: 'localhost',
      port: 5432,
      user: 'pgadmin',
      password: 'pg123',
      database: 'user_db',
    },
  },
  production: {
    database: {
      host: 'postgres',
      port: 5432,
      user: 'pgadmin',
      password: 'pg123',
      database: 'user_db',
    },
  },
};

const pool = new Pool(config[process.env.NODE_ENV || 'development'].database);

module.exports = pool;

