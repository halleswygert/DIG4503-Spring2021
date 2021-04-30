import { query, response } from 'express';
import MongoClient from 'mongodb';

const URL = "mongodb+srv://HalleSwygert:DOQ2GzWFYP0oq2DN@cluster0.yuzwq.mongodb.net"; 

export default class Database{ 
    constructor(){
        this.connection = null; 
        this.database = null;
        this.collection = null; 
    }
    async connect(){
        this.connection = await MongoClient.connect(URL,{useUnifiedTopology: true});
        this.database = this.connection.db("portfolio2"); 
        this.collection = this.database.collection("HalleSwygert")
    }

    async createOne(){
        if(this.collection != null){
         const result = await this.collection.insertOne({"title": title, "year": year, "description": description})
         return{result}

        }else{
            return null; 
        }

    }


close() {
    if(this.connection != null) {
      this.collection.close();
    }
  }