import request from "supertest"
import { baseUrl } from "../data/config.js"

export async function updateCategory(token,categoryId,category){
    const response = await request(baseUrl)
        .put(`/categories/${categoryId}`)
        .send(category)
        .set("Content-Type","application/json")
        .set("Authorization", `Bearer ${token}`);
    return (await response._body)
}
