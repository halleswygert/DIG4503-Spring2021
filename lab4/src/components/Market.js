import React from 'react';
import MarketItem from './MarketItem.js';

class Market extends React.Component {

    constructor(props){
        super(props);
        this.state = {items:[]};
    };

    render(){
        return(
            <div>
          <h2>Click here to add items!</h2>
         <button onClick = {()=> {
            const items = this.state.items;
            items.push(<MarketItem count = {items.length}/>);
            this.setState({items: items});
            }}>Press me!</button>

     <div>
       {this.state.items.map((count, key) => {
         return <p key = {key}>{count}</p>
     })
    }
    </div>
    </div> 
        )
    }
}

export default Market;