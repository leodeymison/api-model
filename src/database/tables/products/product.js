const {Sequelize} = require('sequelize')
const connection = require('../../connection')
const Category_sub = require('./categorys_sub')

const Product = connection.define('product', {
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
                msg: 'Campo obrigatório: image'
            }
        }
    },
    price: {
        type: Sequelize.TINYINT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: price'
            }
        }
    },
    quantity: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: quantity - Quantidade de produto'
            }
        }
    },
    indications: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: indications - Containdicação'
            }
        }
    },
    status: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: status - true / false Se estão ativos'
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

Category_sub.hasMany(Product)
Product.belongsTo(Category_sub)

Product.sync({force: false})

module.exports = Product