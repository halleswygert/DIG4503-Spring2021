import Axios from "axios"; 
import {useState} from "react"; 
import React from "react"; 

// finish client code first 

function Get(){

    const [search, setSearch] = useState("");
    const [movie,setMovie] = useState({title: "N/A", year: "N/A"});
    
    function getMovie(){
        Axios.get("http://localhost:45030/HalleSwygert/" + search + movie)
        .then(function (response){
            setMovie(response.data);
            console.log(response.data);
          })
      
          .catch(function (error){
            console.log("Error: " + error);
            setMovie({title:"Not found", year:"Not found"});
          });
        }

    return(
        <div>
         <h1>Search for a Movie!</h1>
         <input type="text" onChange={(event) => setSearch(event.target.value)}/>
         <button onClick={()=> getMovie()}>Submit</button>
         <p>Title: </p>
         <p>Year:</p>
         <p>Description: </p>

        </div>

    )
}
    export default Get;


