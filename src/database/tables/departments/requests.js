const { Sequelize } = require('sequelize')
const connection = require('../../connection')
const Organization = require("../organization")
const Client = require("../clients/client")

const Requests = connection.define('requests', {
    number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: number - número do pedido'
            }
        }
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: codigo - código do pedido'
            }
        }
    },
    type_pagament: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: pagamento'
            }
        }
    },
    troco: {
        type: Sequelize.TINYINT,
        allowNull: true
    },
    total: {
        type: Sequelize.TINYINT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: total - valor total do pedido'
            }
        }
    },
    type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: type - Se é entrega ou salão'
            }
        }
    },
    mesa: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 
    start:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    end:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    entregador: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: Entregador'
            }
        }
    },
    ok: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo obrigatório: ok - Se já está pronto'
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

Organization.hasMany(Requests)
Requests.belongsTo(Organization)

Client.hasMany(Requests)
Requests.belongsTo(Client)

Requests.sync({force: false})

module.exports = Requests