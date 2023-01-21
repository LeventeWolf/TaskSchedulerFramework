const {createPool} = require('mariadb');

const pool = createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'HybridMetricsFramework'
});


module.exports = {pool}