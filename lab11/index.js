import Express from 'express';
import CORS from 'cors';
import Database from './Database.js'

const App= Express();
const port= 45030; 

App.use(Express.json()); 
App.use(CORS()); 

const d = new Database(); 
d.connect(); 


App.put("/books/:ISBN", (req,res) => {
  let newDoc = 
  d.createOne(request.params.ISBN, request.params.title, 
  request.params.author,request.params.description); 

  console.log(req.body); 
}); 

App.get("/books/:ISBN", (req,res) =>{
    d.readOne();
    
});

App.post("/books/search/", (req,res) =>{
    d.readMany(); 

}); 

App.patch("/books/:ISBN", (req,res) => {
    d.updateOne();
}); 

App.delete("/books/:ISBN", (req,res) => {
const request = req.params.request; 
let response = {"books": 0};
const result = await d.deleteOne()
}); 

App.listen(45030, function(){
    console.log('server 45030 is running.')
}); 