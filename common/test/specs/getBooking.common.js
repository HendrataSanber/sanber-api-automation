const require = require("supertest");
const baseUrl = "https://kasir-api.belajarqa.com";
const {expect} = require("chai")

describe("Get all booking",()=>{
    it("Positive - Get all booking",()=>{
        const response = request(baseUrl)
            .get('/booking')
        
        expect(response.status).to.equal(200)
    })
})