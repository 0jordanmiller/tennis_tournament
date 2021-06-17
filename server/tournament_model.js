const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'tennis_tournament',
  password: 'root',
  port: 5432,
})

const getTournaments = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM tournaments ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

module.exports = {
  getTournaments,
}