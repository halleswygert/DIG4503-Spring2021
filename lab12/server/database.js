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
if(this.collection != null){
let data = {
    "ISBN": ISBN,
    "title": title,
    "author": author,
    "description": description,   
}
await this.collection.insertOne(data); 
return data; 
}
}
async readOne(){
    if(this.collection !=null){
    return await this.collection.findOne({"ISBN": ISBN})
}}
async readMany(){
    if(this.collection !=null){

    }
}

async updateOne(){
    if(this.collection !=null){

}}
// books or ISBN? 
async deleteOne(ISBN){
    if(this.collection != null) {
    const result = await this.collection.deleteOne({"ISBN":ISBN}); 
    return {"books" : result.deletedCount}
    }else{
        return {"books": "deleted books not found."}; 
    }
}

close(){
    if(this.collection !=null ){
        this.collection.close();
    }
}}
export default Database 