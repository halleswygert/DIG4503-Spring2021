import Express, { response } from 'express';
import CORS from 'cors';
import Database from './Database.js'

const App= Express();
const port= 45030; 
const database = new Database();

App.use(Express.json()); 
App.use(CORS()); 


App.put("/books/:ISBN", (req,res) => {
  let newDoc = 
  database.createOne(request.params.title, 
  request.params.author,request.params.description); 

  response.json(newDoc); 
}); 

App.get("/books/:ISBN", (req,res) =>{
    database.readOne();
    
});

App.post("/books/search/:books", (req,res) =>{
    database.readMany(); 

}); 

App.patch("/books/:ISBN", (req,res) => {
    database.updateOne();
}); 

App.delete("/books/:ISBN", (req,res) => {
    database.deleteOne(); 

}); 

App.listen(45030, function(){
    console.log('server 45030 is running.')
}); 