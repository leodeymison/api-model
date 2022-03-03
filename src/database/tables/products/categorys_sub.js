const { Sequelize } = require('sequelize')
const connection = require('../../connection')
const Category = require("./categorys")

const Category_sub = connection.define('category_sub', {
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

Category.hasMany(Category_sub)
Category_sub.belongsTo(Category)

Category_sub.sync({force: false})

module.exports = Category_sub