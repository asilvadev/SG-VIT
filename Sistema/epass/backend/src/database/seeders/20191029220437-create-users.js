'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('users', [{
        "name": "Lesya Clapperton",
        "email": "lclapperton0@free.fr",
        "cpf": "52-118-4745",
        "senha": "ICw4aCB",
        "is_func": true,
        "is_admin": false,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Ulises Jurkowski",
        "email": "ujurkowski1@qq.com",
        "cpf": "44-881-0854",
        "senha": "scZt0y7n",
        "is_func": false,
        "is_admin": false,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Frederich Tunnock",
        "email": "ftunnock2@symantec.com",
        "cpf": "77-472-9897",
        "senha": "pfPm8KH",
        "is_func": false,
        "is_admin": false,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Bess Jefferies",
        "email": "bjefferies3@examiner.com",
        "cpf": "28-793-6813",
        "senha": "XrMcHq7akob",
        "is_func": false,
        "is_admin": true,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Nancee Rockell",
        "email": "nrockell4@blogtalkradio.com",
        "cpf": "53-156-8464",
        "senha": "Qdk6rk",
        "is_func": true,
        "is_admin": false,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Joelynn Tyhurst",
        "email": "jtyhurst5@deliciousdays.com",
        "cpf": "57-440-6903",
        "senha": "5ndiT8mwLYP",
        "is_func": false,
        "is_admin": true,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Pammy MacInerney",
        "email": "pmacinerney6@microsoft.com",
        "cpf": "17-562-8967",
        "senha": "grYw7VY",
        "is_func": false,
        "is_admin": false,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Lorinda Joubert",
        "email": "ljoubert7@alibaba.com",
        "cpf": "55-414-5202",
        "senha": "wgMjOEX",
        "is_func": true,
        "is_admin": false,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Annadiane Tocher",
        "email": "atocher8@unesco.org",
        "cpf": "37-896-2209",
        "senha": "fkFtXm4",
        "is_func": false,
        "is_admin": true,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Sandro Alexandrou",
        "email": "salexandrou9@ycombinator.com",
        "cpf": "05-220-0186",
        "senha": "3Vep58YC",
        "is_func": false,
        "is_admin": true,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Matthias Switland",
        "email": "mswitlanda@ucoz.ru",
        "cpf": "24-711-3865",
        "senha": "qHEEVWuEH3sW",
        "is_func": false,
        "is_admin": false,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Doralia Angerstein",
        "email": "dangersteinb@yahoo.co.jp",
        "cpf": "19-931-0450",
        "senha": "18AD9N0u8",
        "is_func": false,
        "is_admin": true,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Abbott Gert",
        "email": "agertc@opensource.org",
        "cpf": "04-540-3269",
        "senha": "X35JpYQW",
        "is_func": true,
        "is_admin": true,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Shirlene Tremoille",
        "email": "stremoilled@walmart.com",
        "cpf": "08-662-5106",
        "senha": "DZxBoywmEqA",
        "is_func": true,
        "is_admin": false,
        "created_at": new Date(),
        "updated_at": new Date()
      }, {
        "name": "Trina Gorrie",
        "email": "tgorriee@arizona.edu",
        "cpf": "06-242-6121",
        "senha": "iHYpTE8TpbF",
        "is_func": true,
        "is_admin": true,
        "created_at": new Date(),
        "updated_at": new Date()
}], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('users', null, {});

  }
};
