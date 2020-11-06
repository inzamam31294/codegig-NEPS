const { Sequelize } = require('sequelize')

const db = new Sequelize('codegig', 'root', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
})

module.exports = db
