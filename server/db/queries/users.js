const { pool } = require('../queries/pool');
const db = require('../../configs/db.config');

const getAllUsers = () => {
	return db.query("SELECT * FROM users;").then(data => {
		return data.rows;
	});
};

module.exports = { getAllUsers };