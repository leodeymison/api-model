const { Sequelize } = require('sequelize')
const connection = require('../../connection')
const Product = require('./product')

const Product_promotion = connection.define('product_promotion', {
    start: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: start - inicio'
            }
        }
    },
    end: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: end - fim'
            }
        }
    },
    new_price: {
        type: Sequelize.TINYINT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: end - fim'
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


Product.hasMany(Product_promotion)
Product_promotion.belongsTo(Product)

Product_promotion.sync({force: false})

module.exports = Product_promotion