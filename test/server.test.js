const app = require("../src/app")
const supertest = require("supertest")
const request = supertest(app)


test("Deve responder na porta 3000", () => {
    return request.get("/")
    .then(res => {
        expect(res.statusCode)
        .toEqual(200)
    })
})