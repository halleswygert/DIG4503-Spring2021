import Axios from 'axios'; 
import {useState} from 'react';
import React from "react"; 

export default function Patch(){
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const updateMovie = async (e) =>{
        e.preventDefault()
        const results = await Axios.patch('http://localhost:45040/update',{title, description});



        console.log(results)

    }
return(
<div>
    <h1> Update a movie </h1>
   <p>Title: </p>
    <input type="text" id ="title" value = {title} onChange={(event) => setTitle(event.target.value)}/>
    <p>Description: </p>
    <input type="text" id ="description" value = {description} onChange={(event) => setDescription(event.target.value)}/>
    <button onClick={updateMovie}>Update Movie</button>
    
</div>
)

}