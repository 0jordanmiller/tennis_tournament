const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'tennis_tournament',
  password: 'root',
  port: 5432,
})