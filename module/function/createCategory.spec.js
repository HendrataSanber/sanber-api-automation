import request from "supertest"
import { baseUrl } from "../data/config.js"

export async function createCategory(token,category){
    const response = await request(baseUrl)
        .post('/categories')
        .send(category)
        .set("Content-Type","application/json")
        .set("Authorization", `Bearer ${token}`);
    return (await response._body)
}
