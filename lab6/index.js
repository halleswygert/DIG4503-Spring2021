import Express from "express";

const App = Express();
const port = 45030; 

const person = {
    name: 'Halle',
    color: 'Green'

};

App.get('/',function(request,response){
    response.send("Hello World!");
}); 

App.get('/person',function (request,response){
    response.json(person);

}); 

App.listen(port,function(){
    console.log("server is running");
}); 