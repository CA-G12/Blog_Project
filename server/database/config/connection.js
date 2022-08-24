const { Pool } = require('pg');
require('env2')('.env');

const DATABASE_URL = 'postgres://anon:123123@localhost:5432/blog';

if (!DATABASE_URL) {
  throw new Error('invalid db url');
}

const connection = new Pool({
  connectionString: DATABASE_URL,
  ssl: false,
});

module.exports = connection;
