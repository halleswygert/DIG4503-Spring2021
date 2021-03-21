import Express from 'express';
import CORS from 'cors';

const App  = Express();
const port = 45030;

App.use(CORS()); 

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.put("/people/:person", (req, res) => {
    let person = req.params.person;
    names.push(person);
    res.json({name: req.params.person});
})

App.get("/people/:person", (req,res) => {
    let result = {name: "not found"};
    names.forEach((value) => {
        if(req.params.person == value){
            result = {name: value};
        }

    });
    res.json(result);
});

App.get("/search/:name", (req, res) => {
    let result = {search: "not found"};

    let searchResult = [];

    names.forEach((value) => {
        if(value.includes(req.params.name)){
            searchResult.push(value);

        }
    });
    if(searchResult.length>0){
        result ={names: searchResult};
    }

    res.json(result);
});

App.listen(port, ()=>{
    console.log("server is running!");

});



