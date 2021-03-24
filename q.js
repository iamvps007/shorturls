const pool = require('./db/db');

const createUser = (request, response) => {
  //   const { name, email } = request.body;
  pool.query(
    "INSERT INTO shorturls.users (username ,name, password, email) VALUES ($1, $2,$3,$4)",
    ["name", "1", "asd", "asdasd"],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
};

module.exports = {
  createUser,
};
