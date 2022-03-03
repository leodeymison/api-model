const { Sequelize } = require('sequelize')
const connection = require('../../connection')
const Product = require('./product')

const Images = connection.define('images', {
    url: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: url - link da imagem'
            }
        }
    },
})


Product.hasMany(Images)
Images.belongsTo(Product)

Images.sync({force: false})

module.exports = Images