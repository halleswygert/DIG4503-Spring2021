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
    "title":"",
    "author":"",
    "description":"", 
}

}

async readOne(){
    let search = 
}

async readMany(){

}

async updateOne(){

}

async deleteOne(){

}

close(){
    if(this.collection !=null ){
        this.collection.close();
    }
}}
export default Database 