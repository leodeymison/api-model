const router = require('express').Router()
const Constrollers = require('../controllers/index')
const TableUsers = require('../database/tables/users')

router.get('/users', async (req,res) => { // Busca de todos os linhas de uma tabela
    const data = {
        table: TableUsers
    }
    const response = await Constrollers.GET_ALL(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})

router.post('/users', async (req,res) => { // Criação de uma linha em uma tabela
    const data = {
        params: {
            name: req.body.name,
            search: `${req.body.name} ${req.body.branch} ${req.body.email} ${req.body.login} ${req.body.type} ${req.body.cargo}`,
            email: req.body.email,
            login: req.body.login,
            password: req.body.password,
            type: req.body.type,
            cargo: req.body.cargo,
            create: Date.now(),
            update: Date.now(),
        },
        validations: [
            {name: "Nome",body: req.body.name,undefined: false,null: false,max: 255,min: 1,email: false,isNumber: false},
            {name: "Pesquisa",body: req.body.search,undefined: false,null: false,max: 65535,min: 1,email: false,isNumber: false},
            {name: "E-mail",body: req.body.email,undefined: false,null: false,max: 255,min: 1,email: true,isNumber: false},
            {name: "Login",body: req.body.login,undefined: false,null: false,max: 255,min: 1,email: false,isNumber: false},
            {name: "Senha",body: req.body.password,undefined: false,null: false,max: 255,min: 1,email: false,isNumber: false},
            {name: "Tipo de usuário",body: req.body.type,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "Cargo",body: req.body.cargo,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            // 3          -> FLOAT
            // 11         -> NUMBER
            // 255        -> STRING
            // 65535      -> TEXT
            // 1073741823 -> TEXT('long')
        ],
        table: TableUsers
    }
    const response = await Constrollers.POST(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})
router.put('/users/:id', async (req,res) => { // Atualização de uma linha em uma tabela
    const data = {
        params: {
            name: req.body.name,
            search: `${req.body.name} ${req.body.branch} ${req.body.email} ${req.body.login} ${req.body.type} ${req.body.cargo}`,
            email: req.body.email,
            login: req.body.login,
            password: req.body.password,
            type: req.body.type,
            cargo: req.body.cargo,
            update: Date.now(),
        },
        validations: [
            {name: "Id",body: req.params.id,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "Nome",body: req.body.name,undefined: false,null: false,max: 255,min: 1,email: false,isNumber: false},
            {name: "Pesquisa",body: req.body.search,undefined: false,null: false,max: 65535,min: 1,email: false,isNumber: false},
            {name: "E-mail",body: req.body.email,undefined: false,null: false,max: 255,min: 1,email: true,isNumber: false},
            {name: "Login",body: req.body.login,undefined: false,null: false,max: 255,min: 1,email: false,isNumber: false},
            {name: "Senha",body: req.body.password,undefined: false,null: false,max: 255,min: 1,email: false,isNumber: false},
            {name: "Tipo de usuário",body: req.body.type,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "Cargo",body: req.body.cargo,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            // 3          -> FLOAT
            // 11         -> NUMBER
            // 255        -> STRING
            // 65535      -> TEXT
            // 1073741823 -> TEXT('long')
        ],
        id: req.params.id,
        table: TableUsers
    }
    const response = await Constrollers.PUT(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})
router.delete('/users/:id', async (req,res) => { // deleção de uma linha em uma tabela
    const data = {
        id: req.params.id,
        table: TableUsers,
        validations: [
            {name: "Id",body: req.params.id,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            // 3          -> FLOAT
            // 11         -> NUMBER
            // 255        -> STRING
            // 65535      -> TEXT
            // 1073741823 -> TEXT('long')
        ],
    }
    const response = await Constrollers.DELETE(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})
router.get('/users/:id', async (req,res) => { // Busca de uma linha pela ID na tabela
    const data = {
        id: req.params.id,
        table: TableUsers,
        validations: [
            {name: "Id",body: req.params.id,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            // 3          -> FLOAT
            // 11         -> NUMBER
            // 255        -> STRING
            // 65535      -> TEXT
            // 1073741823 -> TEXT('long')
        ],
    }
    const response = await Constrollers.GET_ID(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})
router.get('/users/pag/:id', async (req,res) => { // Busca de dados com paginação em uma tabela
    const data = {
        config: {
            pag: parseInt(req.params.id),
            limit: 10
        },
        validations: [
            {name: "Id",body: req.params.id,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            // 3          -> FLOAT
            // 11         -> NUMBER
            // 255        -> STRING
            // 65535      -> TEXT
            // 1073741823 -> TEXT('long')
        ],
        id: req.params.id,
        table: TableUsers
    }
    const response = await Constrollers.GET_PAG(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})
router.get('/users/all/results', async (req,res) => { // Pesquisa de dados
    var text = req.query['search']
    const data = {
        search: text,
        table: TableUsers
    }
    const response = await Constrollers.GET_SEARCH(data)
    res.status(response.statusCode)
    res.json(response.mensage)
    
})

module.exports = router