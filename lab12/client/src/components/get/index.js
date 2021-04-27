import Axios from 'axios'; 
import React from 'react'; 
import {useState} from 'react'; 

// [value, setValue]
function GetFunction(){
    const [ISBN,setISBN] = useState();

    function getBook(){
        Axios.get("http://localhost:45030/books/" + ISBN)
        .then(response => {
            console.log("Book retrieved!" + response.data);
        })
        .catch(error => {
            console.log("Error: Book not found!" + error);
        });

}; 
// accept user input for ISBN to retrieve book 
return(
<div>
    <h1>Retrieve a book</h1>
    <p>ISBN:</p>
    <input type="text" title="ISBN" onChange={(event) => setISBN(event.target.value)}/>
    <p> </p>
  <button onClick={()=> getBook()}>Submit</button>
</div>
)
}

export default GetFunction; 
