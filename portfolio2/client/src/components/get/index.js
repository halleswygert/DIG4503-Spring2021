import Axios from 'axios'; 
import {useState} from 'react';
import React from "react"; 

export default function Get(){
    
    const [year, setYear] = useState("");
    const [movies, setMovies] = useState([]);
 
    const getMovie = async (e) =>{
        e.preventDefault()
        const results = await Axios.get('http://localhost:45040/allMovies/'+year);
        setMovies(results)


        console.log(results)
    }

    let tempelate
    if(movies.length !=0){
     tempelate =  movies.data.map((movie)=>{

        return(
            <div>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
            <p>{movie.description}</p>
            </div>
        )
    })

}else{
            tempelate = <p>Search By Date</p>
}
return(
<div>
    <h1> Retrieve a movie </h1>
   <p>Year: </p>
    <input type="text" id ="year" value = {year} onChange={(event) => setYear(event.target.value)}/>
    <button onClick={getMovie}>Get Movie</button>
    <div>
        {tempelate}
    </div>
</div>
)

}