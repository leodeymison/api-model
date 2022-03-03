const router = require('express').Router()
const Constrollers = require('../../controllers/index')
const TableComments = require('../../database/tables/about/comments')

router.get('/comments', async (req,res) => { // Busca de todos os linhas de uma tabela
    const data = {
        table: TableComments
    }
    const response = await Constrollers.GET_ALL(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})

router.post('/comments', async (req,res) => { // Criação de uma linha em uma tabela
    const data = {
        params: {
            star: req.body.star,
            search: `${req.body.body}`,
            body: req.body.body,
            create: Date.now(),
            update: Date.now(),
            organizationId: req.body.organizationId,
            clientId: req.body.clientId
        },
        validations: [
            {name: "Estrelas",body: req.body.star,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "Pesquisa",body: req.body.search,undefined: false,null: false,max: 65535,min: 1,email: false,isNumber: false},
            {name: "Comentário",body: req.body.body,undefined: false,null: false,max: 65535,min: 1,email: false,isNumber: false},
            {name: "id da Empresa",body: req.body.organizationId,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "id do Cliente",body: req.body.clientId,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            // 3          -> FLOAT
            // 11         -> NUMBER
            // 255        -> STRING
            // 65535      -> TEXT
            // 1073741823 -> TEXT('long')
        ],
        table: TableComments
    }
    const response = await Constrollers.POST(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})
router.put('/comments/:id', async (req,res) => { // Atualização de uma linha em uma tabela
    const data = {
        params: {
            star: req.body.star,
            search: `${req.body.body}`,
            body: req.body.body,
            update: Date.now(),
            organizationId: req.body.organizationId,
            clientId: req.body.clientId
        },
        validations: [
            {name: "Id",body: req.params.id,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "Estrelas",body: req.body.star,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "Pesquisa",body: req.body.search,undefined: false,null: false,max: 65535,min: 1,email: false,isNumber: false},
            {name: "Comentário",body: req.body.body,undefined: false,null: false,max: 65535,min: 1,email: false,isNumber: false},
            {name: "id da Empresa",body: req.body.organizationId,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            {name: "id do Cliente",body: req.body.clientId,undefined: false,null: false,max: 11,min: 1,email: false,isNumber: true},
            // 3          -> FLOAT
            // 11         -> NUMBER
            // 255        -> STRING
            // 65535      -> TEXT
            // 1073741823 -> TEXT('long')
        ],
        id: req.params.id,
        table: TableComments
    }
    const response = await Constrollers.PUT(data)
    res.status(response.statusCode)
    res.json(response.mensage)
})
router.delete('/comments/:id', async (req,res) => { // deleção de uma linha em uma tabela
    const data = {
        id: req.params.id,
        table: TableComments,
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
router.get('/comments/:id', async (req,res) => { // Busca de uma linha pela ID na tabela
    const data = {
        id: req.params.id,
        table: TableComments,
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
router.get('/comments/pag/:id', async (req,res) => { // Busca de dados com paginação em uma tabela
    const data = {
        config: {
            pag: parseInt(req.params.id),
            limit: 10
        },
        id: req.params.id,
        table: TableComments,
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
router.get('/comments/all/results', async (req,res) => { // Pesquisa de dados
    var text = req.query['search']
    const data = {
        search: text,
        table: TableComments
    }
    const response = await Constrollers.GET_SEARCH(data)
    res.status(response.statusCode)
    res.json(response.mensage)
    
})

module.exports = router