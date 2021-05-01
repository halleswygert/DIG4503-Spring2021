import Axios from 'axios'; 
import {useState} from 'react';
import React from "react"; 

export default function Delete(){
    const [title, setTitle] = useState("");

    const deleteMovie = async (e) =>{
        e.preventDefault()
        const results = await Axios.delete('http://localhost:45040/DeleteMovie/'+ title);

    window.alert("movie record deleted")
            setTitle("")

        console.log(results.data)

    }

return(
<div>
    <h1> Delete a Movie </h1>
    <p>Title:</p>
    <input type="text" id="title" value = {title} onChange={(event) => setTitle(event.target.value)}/>
    <button onClick={deleteMovie}>Delete Movie</button>
</div>
)
}