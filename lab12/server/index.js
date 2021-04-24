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
   const ISBN = request.params.ISBN;

   const title = request.body.title;

   const author = request.body.author;

   const description = request.body.description; 
    
   const result = await d.createOne(ISBN,title,author,description); 

   response.json(result); 

}); 

App.get("/books/:ISBN", async (req,res) =>{
    const ISBN = request.body.params; 
    let results = await d.readOne(ISBN);
    
    response.json(result); 
});

App.post("/books/search/", async (req,res) =>{
    const documents = await d.readMany({books:[]}); 

    response.json(result); 

}); 

App.patch("/books/:ISBN", async (req,res) => {
    d.updateOne();

    response.json(result);
}); 

App.delete("/books/:ISBN", async (req,res) => {
const ISBN = req.params.ISBN; 
const result = await d.deleteOne(ISBN)
response.json(result); 
}); 

App.listen(45030, function(){
    console.log('server 45030 is running.')
}); 