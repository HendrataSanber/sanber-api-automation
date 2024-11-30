import request from "supertest"
import { baseUrl } from "../data/config.js"

async function getCategoryAll(token){
    const response = await request(baseUrl)
        .get('/categories')
        .set("Authorization", `Bearer ${token}`);
    return (await response._body)
}

async function getCategoryById(token,categoryId){
    const response = await request(baseUrl)
        .get(`/categories/${categoryId}`)
        .set("Authorization", `Bearer ${token}`);
        return (await response._body)
}

export const getCategory = {
    all : getCategoryAll,
    id : getCategoryById,
}