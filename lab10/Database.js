import MongoClient from 'mongodb';

const URL = "mongodb+srv://HalleSwygert:DOQ2GzWFYP0oq2DN@cluster0.yuzwq.mongodb.net";

 class Database{
    constructor(){
        this.connection = null;
        this.database = null; 
        this.collection = null; 
    }

async connect(){
    this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true});
    this.database = this.connection.db("lab10");
    this.collection = this.database.collection("people"); 
}

async createOne(first,last,color){
    let object = {
        "firstName": "",
        "lastName": "",
        "favoriteColor": "", 
    };
    if(this.collection != null)
     return await this.collection.insertOne(object); 
}

 async readOne(query) {
    let results = await this.collection.findOne({firstName: query});
        if (results != null) {
            return results;
        }
        else{
            return{person: "not found"};
        }
}

close() {
if(this.collection != null) {
  this.connection.close();}
}
}



export default Database;
