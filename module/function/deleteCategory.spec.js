import request from "supertest"
import { baseUrl } from "../data/config.js"

export async function deleteCategory(token,categoryId){
    const response = await request(baseUrl)
        .delete(`/categories/${categoryId}`)
        .set("Authorization", `Bearer ${token}`);
    return (await response._body)
}
