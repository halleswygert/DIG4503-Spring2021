import express from 'express';
import CORS from 'cors';

const App= Express();
const port= 45030; 
App.use(Express.json()); 
App.use(CORS()); 

App.put("/books/:ISBN", (req,res) => {

}); 

App.get("/books/:ISBN", (req,res) =>{

});


App.post("/books/search", (req,res) =>{

}); 

App.patch("/books/:ISBN", (req,res) => {

}); 