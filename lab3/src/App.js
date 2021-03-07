import HomePage from './components/HomePage/homepage.js';
import Facts from './components/FunFacts/facts.js';
import {useState} from "react";
import './App.css'; 
import Images from './components/Photos/photos';

function App(){

    //login input
const [loggedin,setLoggedin] = useState(false)
const [submit,setSubmit] = useState("")

// constants called by Facts component 
const name='Halle';
const food='Pizza';
const age='22'; 
const pet='cat';
const hobby='singing';

    return (
        <>
        {
            (loggedin == false) ? (
                <>
                <p style={{color:"lightblue"}}> Oh hello, enter a username so we can get to know eachother!</p>
                <input type = "text" onChange={(event) => {
                    setSubmit(event.target.value); 
                }} />
                <button onClick ={() => setLoggedin(submit)
                }>submit</button>
            
                </>
            ):

        (
            <div>
                <h1 style={{color:'lightblue'}}> Happy To See You {submit}!</h1>
                <HomePage firstName={name}></HomePage>
                <Images></Images>
                <Facts myAge={age} myPet={pet} myHobby={hobby} favFood={food}></Facts>

            </div>
        )

            

          }  </>
      
    )
            }
export default App; 