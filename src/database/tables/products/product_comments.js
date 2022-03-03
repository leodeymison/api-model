const { Sequelize } = require('sequelize')
const connection = require('../../connection')
const Product = require('./product')

const Product_comments = connection.define('product_comments', {
    star: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: star - quantidade de estrelas'
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


Product.hasMany(Product_comments)
Product_comments.belongsTo(Product)

Product_comments.sync({force: false})

module.exports = Product_comments