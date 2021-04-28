import Axios from 'axios'; 
import React from 'react'; 
import {useState} from 'react'; 

// [value, setValue]
// 
function DeleteFunction(){

    const [ISBN,setISBN] = useState(); 

    function deleteBook(){
        Axios.delete("http://localhost:45030/books/"  + ISBN)
        .then(response => {
            console.log("Book successfully deleted!" + response.data);
        })
        .catch(error => {
            console.log("Error: Book not found!" + error);
        });

}; 

// accepts ISBN as input to delete book 
    return(
        <div>
            <h1> Click here to delete a book </h1>
            <p>Enter ISBN:</p>
            <input type="text" title="ISBN" onChange={(event) => setISBN(event.target.value)}/> 
            <p> </p>
             <button onClick={()=> deleteBook()}>Submit</button>  
        </div>
    )
}

export default DeleteFunction; 