const Pool = require("pg").Pool;

const pool = new Pool({
  user: "upuhumfrklupae",
  host: "ec2-54-235-108-217.compute-1.amazonaws.com",
  database: "dafhbp0kkr5acg",
  password: "3054c1b8bff07ef32e895a022198aceacb65408728d32d15c91aeaa276a4ce7e",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});



module.exports = pool;
