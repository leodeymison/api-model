const router = require('express').Router()
const Constrollers = require('../controllers/index')
const TableOrganization = require('../database/tables/organization')

router.get('/organization', async (req,res) => { // Busca de todos os linhas de uma tabela
    const data = {
        table: TableOrganization
    }
    const response = await Constrollers.GET_ALL(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})

router.post('/organization', async (req,res) => { // Criação de uma linha em uma tabela
    const data = {
        params: {
            name: req.body.name,
            search: `${req.body.name} ${req.body.branch}`,
            branch: req.body.branch,
            packege: req.body.packege,
            payment_date: req.body.payment_date,
            language: req.body.language,
            create: Date.now(),
            update: Date.now(),
        },
        validations: [
            {name: "Nome",body: req.body.name,undefined: false,null: false,max: 255,min: 1,email: false,isNumber: false},
            {name: "Pesquisa",body: req.body.search,undefined: false,null: false,max: 65535,min: 1,email: false,isNumber: false},
            {name: "Ramo de negócio",body: req.body.branch,undefined: false,null: false,max: 255,min: 3,email: false,isNumber: false},
            {name: "Pacote",body: req.body.packege,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "Data do pagamento",body: req.body.payment_date,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "Linguagem",body: req.body.language,undefined: false,null: false,max: 255,min: 1,email: false,isNumber: false},
            // 3          -> FLOAT
            // 11         -> NUMBER
            // 255        -> STRING
            // 65535      -> TEXT
            // 1073741823 -> TEXT('long')
        ],
        relationship: [],
        table: TableOrganization
    }
    const response = await Constrollers.POST(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})
router.put('/organization/:id', async (req,res) => { // Atualização de uma linha em uma tabela
    const data = {
        params: {
            name: req.body.name,
            search: `${req.body.name} ${req.body.branch}`,
            branch: req.body.branch,
            packege: req.body.packege,
            payment_date: req.body.payment_date,
            language: req.body.language,
            update: Date.now(),
        },
        validations: [
            {name: "Id",body: req.params.id,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "Nome",body: req.body.name,undefined: false,null: false,max: 255,min: 1,email: false,isNumber: false},
            {name: "Pesquisa",body: req.body.search,undefined: false,null: false,max: 65535,min: 1,email: false,isNumber: false},
            {name: "Ramo de negócio",body: req.body.branch,undefined: false,null: false,max: 255,min: 3,email: false,isNumber: false},
            {name: "Pacote",body: req.body.packege,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "Data do pagamento",body: req.body.payment_date,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "Linguagem",body: req.body.language,undefined: false,null: false,max: 255,min: 1,email: false,isNumber: false},
            // 3          -> FLOAT
            // 11         -> NUMBER
            // 255        -> STRING
            // 65535      -> TEXT
            // 1073741823 -> TEXT('long')
        ],
        id: req.params.id,
        table: TableOrganization
    }
    const response = await Constrollers.PUT(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})
router.delete('/organization/:id', async (req,res) => { // deleção de uma linha em uma tabela
    const data = {
        id: req.params.id,
        table: TableOrganization,
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
router.get('/organization/:id', async (req,res) => { // Busca de uma linha pela ID na tabela
    const data = {
        id: req.params.id,
        table: TableOrganization,
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
router.get('/organization/pag/:id', async (req,res) => { // Busca de dados com paginação em uma tabela
    const data = {
        config: {
            pag: parseInt(req.params.id),
            limit: 10
        },
        id: req.params.id,
        table: TableOrganization,
        validations: [
            {name: "Id",body: req.params.id,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            // 3          -> FLOAT
            // 11         -> NUMBER
            // 255        -> STRING
            // 65535      -> TEXT
            // 1073741823 -> TEXT('long')
        ],
    }
    const response = await Constrollers.GET_PAG(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})
router.get('/organization/all/results', async (req,res) => { // Pesquisa de dados
    var text = req.query['search']
    const data = {
        search: text,
        table: TableOrganization,
    }
    const response = await Constrollers.GET_SEARCH(data)
    res.status(response.statusCode)
    res.json(response.mensage)
    
})

module.exports = router