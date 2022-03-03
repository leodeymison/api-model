const { Sequelize } = require('sequelize')
const connection = require('../../connection')
const Client = require('./client')
const Product = require('../products/product')

const Clients_favorite = connection.define('clients_favorite', {
    create: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: name'
            }
        }
    },
    create: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: name'
            }
        }
    },
    create: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: create - Data em milesegundos'
            }
        }
    },
    update: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: update - Data em milesegundo'
            }
        }
    }
})

Client.hasMany(Clients_favorite)
Clients_favorite.belongsTo(Client)

Product.hasMany(Clients_favorite)
Clients_favorite.belongsTo(Product)

Clients_favorite.sync({force: false})

module.exports = Clients_favorite