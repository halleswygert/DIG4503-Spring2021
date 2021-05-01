import Express, { request, response } from  'express';
import CORS from 'cors'; 
import Database from './Database.js'


const App = Express(); 
const port = 45040; // had to change server due to other things running on the original 
App.use(Express.json()); 
App.use(CORS()); 

const d = new Database(); 
d.connect("portfolio2","HalleSwygert"); 



//get route 

App.get('/allMovies/:yr', async(req,res)=>{
    const year = req.params.yr
    const result = await d.readMany(year)
    res.status(200).json(result)
})


App.get('/oneMovie/:id', async(req,res)=>{

    const id = req.params.id
    const result = await d.readOne(id)
    res.status(200).json(result)
});

// patch route 


App.patch("/update", async (req,res) => {
    console.log(req.body)
    const {title, description} = req.body;
    const result = await d.updateOne(title, description);

    res.json(result);
}); 

//delete route

App.delete('/DeleteMovie/:ttl',(req,res)=>{

    let title = req.params.ttl
    let result = d.deleteOne(title)
    res.json(result)


})

// put route 
App.put('/HalleSwygert', async (request,response) => {
    const title = request.body.title;
    const year = request.body.year;
    const description = request.body.description;
    console.log(title, year, description)
    let results = await d.createOne(title,year,description);

    response.json(results); 
});


App.listen(port, function(){
    console.log("Server is running!");
});