import request from "supertest"
import { baseUrl } from "../data/config.js"

export async function createToken(){
    const payload={
        "email": "hendra@sanbercode.com",
        "password": "12345"
     }
     
    const response = await request(baseUrl)
        .post('/authentications')
        .send(payload)
        .set("Content-Type","application/json")
    const token = (await response)._body.data.accessToken
    return token
}