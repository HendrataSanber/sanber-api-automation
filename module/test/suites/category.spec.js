import {expect} from "chai";
import { createToken } from "../../function/createToken.spec.js";
import { dummyCategory, dummyCategory2 } from "../../data/config.js";
import { getCategory } from "../../function/getCategory.spec.js";
import { createCategory } from "../../function/createCategory.spec.js";
import { updateCategory } from "../../function/updateCategory.spec.js";
import { deleteCategory } from "../../function/deleteCategory.spec.js";

describe("Category API Automation",()=>{
    let token
    let newid

    it("Import token",async ()=>{
        token=await createToken()
    }).timeout(100000);

    it("Create Category",async ()=>{
        const response=await createCategory(token,dummyCategory);

        expect((await response).status).to.equal('success')
        expect((await response).data.name).to.equal(dummyCategory.name)
        newid=(await response).data.categoryId;
    }).timeout(100000);

    it("Get Category By Id",async ()=>{
        const response=await getCategory.id(token,newid);
        expect((await response).status).to.equal('success')
        expect((await response).data.category.description).to.equal(dummyCategory.description)
    }).timeout(100000);

    it("Update Category",async ()=>{
        const response=await updateCategory(token,newid,dummyCategory2);

        expect((await response).status).to.equal('success')
        expect((await response).data.name).to.equal(dummyCategory2.name)
    }).timeout(100000);

    it("Delete Category",async ()=>{
        const response=await deleteCategory(token,newid);

        expect((await response).status).to.equal('success')
        expect((await response).data).to.be.empty
    }).timeout(100000);

})