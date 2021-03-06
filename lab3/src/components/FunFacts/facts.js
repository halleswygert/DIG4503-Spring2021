import React from 'react';

class Facts extends React.Component{
    constructor(props){
        super(props);
        this.state =''; 
    }
    render(){
        return (
        <>

        <h2> Fun Facts </h2>
    
        <p>1. I was born on january 16th 1999. I am {this.props.myAge}!</p>

        <p>2. I have one {this.props.myPet}! Her name is Umi. </p>

        <p>3. my favorite hobby is {this.props.myHobby}.</p>
       
        <p>4. my all time favorite food is {this.props.favFood}.</p>
       </>

        )
    }

}

export default Facts; 