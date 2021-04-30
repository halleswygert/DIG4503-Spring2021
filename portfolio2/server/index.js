import Express, { request, response } from  'express';
import CORS from 'cors'; 
import Database from './Database.js'


const App = Express(); 
const port = 45030;
App.use(Express.json()); 
App.use(CORS()); 

const d = new Database(); 
d.connect(); 


App.put('/HalleSwygert/:title', async (request,response) => {
    const title = request.params.title;
    const year = request.body.year;
    const description = requestion.body.description;
    const results = await d.createOne(title,year,description)

    response.json(results); 
});



App.get();



App.patch();



App.delete(); 




App.listen(port, function(){
    console.log("Server is running!");
});