import Express, { response } from 'express';
import CORS from 'cors';
import Database from './Database.js'

const App= Express();
const port= 45030; 

App.use(Express.json()); 
App.use(CORS()); 

const d = new Database(); 
d.connect(); 


App.put("/books/:ISBN", async (req,res) => {
   
}); 

App.get("/books/:ISBN", async (req,res) =>{
    d.readOne();
    
});

App.post("/books/search/", async (req,res) =>{
    d.readMany(); 

}); 

App.patch("/books/:ISBN", async (req,res) => {
    d.updateOne();
}); 

App.delete("/books/:ISBN", async (req,res) => {
const ISBN = req.params.ISBN; 
const result = await d.deleteOne(ISBN)
response.json(result); 
}); 

App.listen(45030, function(){
    console.log('server 45030 is running.')
}); 