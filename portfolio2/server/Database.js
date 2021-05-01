import { query, response } from 'express';
import MongoClient from 'mongodb';
import pkg from 'mongodb';
const { ObjectId } = pkg;

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
        console.log('DB connected')
    }
//put
    async createOne(title,year,description){
        if(this.collection != null){
         let result = await this.collection.insertOne({"title": title, "year": year, "description": description})
         return{result}

        }else{
            return null; 
        }
    }

    async readMany(year){
        if(this.collection !=null){
            const result = await this.collection.find({year}).toArray()
            return result
                   
        }
    }


    async updateOne(title, description){
        if(this.collection !=null){
            const result = await this.collection.updateOne({title}, { $set:{description} });
            if(result){
                return result
            }else{
                return {message:"No Movie Record Found"}
            }
           
           
    
    }};
    

    async readOne(id){
        if(this.collection !=null){
            const result = await this.collection.find({"_id": ObjectId( id )}).toArray()
            console.log(result)
            return result
            
                
        }
    }
    
    async deleteOne(title){
        if(this.collection != null) {
        const result = await this.collection.deleteOne({ title }); 
        return result
        }else{
            return {message: "Not present in collection"}
        }
    }


close() {
    if(this.connection != null) {
      this.collection.close();
    }
  }}