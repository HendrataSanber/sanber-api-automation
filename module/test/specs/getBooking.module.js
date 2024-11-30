import request from "supertest";
import {expect} from "chai";
import { createToken } from "../../function/createToken.spec.js";
import { baseUrl, dummyCategory, dummyCategory2 } from "../../data/config.js";
import { getCategory } from "../../function/getCategory.spec.js";
import { createCategory } from "../../function/createCategory.spec.js";
import { updateCategory } from "../../function/updateCategory.spec.js";

describe("Auth",()=>{
    let token
    let newid
    let newcategory
    // it("Positive - Auth",async () =>{
    //     const payload={
    //         "email": "hendra@sanbercode.com",
    //         "password": "12345"
    //      }
         
    //     const response = await request(baseUrl)
    //         .post('/authentications')
    //         .send(payload)
    //         .set("Content-Type","application/json")
    //     // console.log((await response)._body.data.accessToken)
    //     // expect((await response).status).to.equal(201)
    // }).timeout(100000);

    it("Import token",async ()=>{
        token=await createToken()
        console.log("Token "+token)
    }).timeout(100000);

    it("Create Category",async ()=>{
        const response=await createCategory(token,dummyCategory);

        expect((await response).status).to.equal('success')
        expect((await response).data.name).to.equal(dummyCategory.name)
        newid=(await response).data.categoryId;
    }).timeout(100000);

    it("Update Category",async ()=>{
        const response=await updateCategory(token,newid,dummyCategory2);

        expect((await response).status).to.equal('success')
        expect((await response).data.name).to.equal(dummyCategory2.name)
    }).timeout(100000);
})