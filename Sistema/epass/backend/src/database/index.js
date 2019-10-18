const Squelize = require('sequelize');
const dbConfig = require ('../config/database');
const User = require('../models/User');
const Peca = require('../models/Peca');

const connection = new Squelize(dbConfig);

User.init(connection);
Peca.init(connection);

module.exports = connection;