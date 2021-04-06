import Express from 'express';
import CORS from 'cors';
import Database from './Database.js'

const App= Express();
const port= 45030; 
App.use(Express.json()); 
App.use(CORS()); 

App.put("/books/:ISBN", (req,res) => {
   Database.createOne();  
}); 

App.get("/books/:ISBN", (req,res) =>{
    Database.readOne();
    
});

App.post("/books/search", (req,res) =>{
    Database.readMany(); 

}); 

App.patch("/books/:ISBN", (req,res) => {
    Database.updateOne();
}); 

App.delete("/books/:ISBN", (req,res) => {
    Database.deleteOne(); 

}); 

App.listen(45030, function(){
    console.log('server 45030 is running.')
}); 