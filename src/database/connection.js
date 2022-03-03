const { Sequelize } = require('sequelize')

const connection = new Sequelize('cardapio', 'root', 'htmlecss', {
    dialect: 'mysql',
    host: 'localhost',
    timezone: '-03:00'
})


module.exports = connection