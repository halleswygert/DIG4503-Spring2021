import Axios from 'axios'; 
import React from 'react'; 
import {useState} from 'react'; 

// [value, setValue]

function DeleteFunction(){

    const [ISBN, deleteISBN] = useState(); 

    function deleteBook(){
        Axios.Delete()
    }
}

export default DeleteFunction; 