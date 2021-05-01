import Axios from 'axios'; 
import {useState} from 'react';
import React from "react"; 

export default function Put(){
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");

    const PutMovie = async (e) =>{
        e.preventDefault()
        const results = await Axios.put('http://localhost:45040/HalleSwygert',
        { "title": title,
           "year": year,
           "description": description, 
        });

    window.alert("movie record added")
            setTitle("")
            setYear("")
            setDescription("")

        console.log(results.data)

    }


return(
<div>
    <h1> Add a movie to your favorites list </h1>
    <p>Title:</p>
    <input type="text" id="title" value = {title} onChange={(event) => setTitle(event.target.value)}/>
    <p>Year: </p>
    <input type="text" id ="year" value = {year} onChange={(event) => setYear(event.target.value)}/>
    <p>Description: </p>
    <input type="text" id= "description" value ={description} onChange={(event) => setDescription(event.target.value)}/>
    <p></p>
    <button onClick={PutMovie}>Add Movie</button>
</div>
)

}