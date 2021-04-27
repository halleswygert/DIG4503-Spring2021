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
//PUT
async createOne(document){
if(this.collection != null){
    
    const result = await this.collection.insertOne({"ISBN": ISBN, "author": author, "title":
    title, "description": description});
}}

//GET
async readOne(query){
    if(this.collection !=null){
    const result = await this.collection.findOne({"ISBN": ISBN})
}};

//POST
async readMany(query){

    if(this.collection !=null){
        const result = await this.collection.findMany

    }
};

//PATCH
async updateOne(){
    if(this.collection !=null){
        const result = await this.collection.updateOne({});

}};

//DELETE
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