const pool = require("../db/db");

exports.addUser = (request, response) => {
  const { username, name, password, email } = request.body;
  pool.query(
    "INSERT INTO shorturls.users (username ,name, password, email) VALUES ($1, $2, $3,$4)",
    [username, name, password, email],
    (error, results) => {
      if (error) {
        response.status(404).send({
          message: error.detail,
        });
        return;
      }
      response.status(200).send({
        message: "user added",
      });
    }
  );
};

exports.userLogin = (request, response) => {
  const { username, password } = request.body;
  pool
    .query(
      "SELECT *FROM shorturls.users WHERE username LIKE $1 AND password LIKE $2",
      [username, password]
    )
    .then((res) =>
      response.status(200).send({
        status: res.rowCount == 1 ? "ok" : "nokay",
        data: res.rows[0],
      })
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.userDelete = (request, response) => {
  const { userId } = request.body;
  pool
    .query("DELETE FROM shorturls.users WHERE userid = $1", [userId])
    .then((res) =>
      response.status(200).send({
        status: res.rowCount == 1 ? true : false,
      })
    )
    .catch((err) =>
      setImmediate(() => {
        throw err;
      })
    );
};

exports.createLink = (request, response) => {
  const { link, userId } = request.body;
  let shortLink = Math.random().toString(36).substring(6);
  pool
    .query(
      "INSERT INTO shorturls.links (shortLink ,original, viewcount, userid) VALUES ($1, $2, 0,$3)",
      [shortLink, link, userId]
    )
    .then((res) =>
      response.status(200).send({
        status: res.rowCount == 1 ? true : false,
        shortCode: shortLink,
      })
    )
    .catch((err) => {
      response.status(404).send({
        message: err.detail,
      });
    });
};

 

/** DO BE LATER */

exports.viewUser = (request, response) => {
  const { username, password } = request.body;
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
