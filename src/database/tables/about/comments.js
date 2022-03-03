const { Sequelize } = require('sequelize')
const connection = require('../../connection')
const Organization = require('../organization')
const Client = require('../clients/client')

const Comments = connection.define('comments', {
    star: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: start - quantidade de estrelas'
            }
        }
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: body - Corpo do comentário'
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

Organization.hasMany(Comments)
Comments.belongsTo(Organization)

Client.hasMany(Comments)
Comments.belongsTo(Client)

Comments.sync({force: false})

module.exports = Comments