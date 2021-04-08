import { query, response } from 'express';
import MongoClient from 'mongodb';

const url = "mongodb+srv://HalleSwygert:DOQ2GzWFYP0oq2DN@cluster0.yuzwq.mongodb.net";

class Database{
    constructor(){
        this.connection = null;
        this.database= null;
        this.collection = null; 
    } 
async connect(){
    this.connection = await MongoClient.connect(url,{useUnifiedTopology:true}); 
    this.database = this.connection.db("lab11");
    this.collection = this.database.collection("books");
}

async createOne(){
let data = {
    "ISBN":"",
    "title":"",
    "author":"",
    "description":"",   
}
response.json(data); 
}
async readOne(){
    return this.collection.findOne(query)
    .then(findDoc=> {
        if(findDoc){
            console.log({ISBN});       
        }else{
          console.log({book: "not found"}); 
    }   

    }
}
async readMany(){
    let books = {

    }
}

async updateOne(){
    

}

async deleteOne(){
    let 

}

close(){
    if(this.collection !=null ){
        this.collection.close();
    }
}}
export default Database 