import Express, { response } from 'express';
import Database from './Database';

const App = Express();
const port = 45035;
const d = new Database();
d.connect(); 


App.put('/people/create/:firstName/:lastName/:favoriteColor', async function(request, response){
    let result = await d.createOne(request.params.firstName, request.params.lastName, request.params.favoriteColor);
    response.json(result);
});

App.get('people/:person', async function(request,response){
    let name = await d.readOne(request.params.person);

    console.log(name);
    response.json(name);
});

App.listen(port, function(){
    console.log("server is running");
});

d.close();