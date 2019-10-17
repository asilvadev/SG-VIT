const Squelize = require('sequelize');
const dbConfig = require ('../config/database');
const User = require('../models/User');

const connection = new Squelize(dbConfig);

User.init(connection);

module.exports = connection;