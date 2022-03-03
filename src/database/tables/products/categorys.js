const { Sequelize } = require('sequelize')
const connection = require('../../connection')
const Organization = require("../organization")

const Category = connection.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: name'
            }
        }
    },
    image: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: branch - Ramo da empresa'
            }
        }
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: packege - tamanho do pacote'
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

Organization.hasMany(Category)
Category.belongsTo(Organization)

Category.sync({force: false})

module.exports = Category