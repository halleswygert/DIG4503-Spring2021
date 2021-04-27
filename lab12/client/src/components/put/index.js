import Axios from 'axios'; 
import React from 'react'; 
import {useState} from 'react'; 

// refer to week 8 for setup
// remember --> [value,setValue]
function PutFunction(){
    const [ISBN, setISBN] = useState("");

    const [title, setTitle] = useState(""); 

    const [author, setAuthor] = useState("");

    const [description, setDescription] = useState(""); 

        function addBooks() {
        Axios.put("http://localhost:45030/books/" + ISBN)
        .then(response => {
            console.log("Book successfully added" + response.data);
        })
        .catch(error => {
            console.log("Error Found" + error);
        });

}; 
        // accept user input for ISBN, TITLE, AUTHOR, DESCRIPTION  
        return(
            <div>
            <h1> Add a new book to your collection! </h1>
            <p>ISBN:</p>
            <input type="text" title="ISBN" onChange={(event) => setISBN(event.target.value)}/>
            <p>Title:</p>
            <input type="text" title="TITLE" onChange={(event) => setTitle(event.target.value)}/>
            <p>Author:</p>
            <input type="text" title="AUTHOR" onChange={(event) => setAuthor(event.target.value)}/>
            <p>Description:</p>
            <input type="text" title="DESCRIPTION" onChange={(event) => setDescription(event.target.value)}/>
            <p> </p>
            <button onClick={()=> addBooks()}>Submit</button>
            </div>
        )
    
    }

export default PutFunction; 