const app = require("../src/app")
const supertest = require("supertest")
const request = supertest(app)


describe("Leitura do database", () => {
    test("Deve retornar todos os resistros do banco de dados", () => {
        return request.get("/project")
        .then(res => {
            // Acessa a rota
            expect(res.statusCode)
            .toEqual(200)

            // Retorna dados
            expect(res.body.error)
            .toEqual(false)
        })
    })
    test("Deve retornar um resistro do database", () => {
        let id = 1
        return request.get(`/project/${id}`)
        .then(res => {
            // Acessa a rota
            expect(res.statusCode)
            .toEqual(200)
            // Retorna dados
            expect(res.body.error)
            .toEqual(false)
        })
    })

})

describe("Criação de resistro no database", () => {
    test("Deve criar um resistro no batabase", () => {
        var data = {
            "name": "acaiteria.com palmas",
            "branch": "acaiteria",
            "packege": 50,
            "description": "Empresa de Palmas tocantins",
            "mission": "Vender açaí",
            "vision": "Açaí",
            "values": "Princípíos cristãos"
        }
        return request.post("/project")
        .send(data)
        .then(res => {
            // Encontrou a rota
            expect(res.statusCode)
            .toEqual(200)
            // Criou o resistro
            expect(res.body.error)
            .toEqual(false)
        })
    })
    test("Deve impedir que resistre com os campos name, branch e packege vázios", () => {
        var data = {
            "name": "",
            "branch": "",
            "packege": undefined,
            "description": "Empresa de Palmas tocantins",
            "mission": "Vender açaí",
            "vision": "Açaí",
            "values": "Princípíos cristãos"
        }
        return request.post("/project")
        .send(data)
        .then(res => {
            expect(res.statusCode)
            .toEqual(406)
        })
    })
})

// describe("Atualização de resistro no database", () => {

// })

// describe("Deleção do database", () => {

// })












// beforeAll(() => {
//     // Roda antes de todos os testes
// })

// afterAll(() => {
//     // Roda depois de todos os teste
// })

// beforeEach(() => {
//     // Roda antes de cada teste
// })

// afterEach(() => {
//     // Roda depois de cada teste
// })