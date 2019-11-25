const Squelize = require('sequelize');
const dbConfig = require ('../config/database');

const User = require('../models/User');
const Peca = require('../models/Peca');
const Ingresso = require('../models/Ingresso');
const Seat = require('../models/Seat');
const Espetaculo = require('../models/Espetaculo');


const connection = new Squelize(dbConfig);

User.init(connection);
Peca.init(connection);
Espetaculo.init(connection);
Seat.init(connection);
Ingresso.init(connection);


User.associate(connection.models);
Peca.associate(connection.models);
Espetaculo.associate(connection.models);
Seat.associate(connection.models);
Ingresso.associate(connection.models);

module.exports = connection;
