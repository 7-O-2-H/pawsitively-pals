const { pool } = require('../queries/pool');
const db = require('../../configs/db.config');

const getAllUsers = () => {
	return db.query("SELECT * FROM users;").then(data => {
		return data.rows;
	});
};

const getUserById = id => {
	return db.query("SELECT * FROM users; WHERE id = $1", [id]).then(data => {
		return data.rows;
	});
};

const getUserByEmail = email => {
  const userEmail = email;
  return db.query(`SELECT * FROM users WHERE users.email = $1`, [userEmail])
  .then(data => {
    return data.rows;
  });
};

const addUser = (user) => {
  const values = [user.first_name, user.last_name, user.email, user.password, FALSE];
  return pool
    .query(`INSERT INTO users (user_name, email, password, admin) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, values)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log('add user error;', err.message);
      return null;
    });
};

module.exports = { getAllUsers, getUserById, getUserByEmail, addUser };