import React, {Component} from "react";
import { render } from "react-dom";


class Images extends Component{
  constructor(props){
    super(props)
    this.state={
      imageUrl: "",
      imageArrays: [
        "https://m.media-amazon.com/images/I/A1iUD82MFaL._SS500_.jpg",
        "https://imgix.bustle.com/uploads/image/2020/10/22/dbbe62e5-2375-49f5-b735-be9f1758aef8-lorem-header-2.jpg?w=653&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.49906890130353815&fp-y=0.1853932584269663",
        "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_nkzzsu33/def_height/500/def_width/500/version/100012/type/1", 

        

      ],
    };
  
  }
render(){
  let imageArrays = this.state.imageArrays;
  const images = imageArrays.map((url)=> {
    return(
      <img
      className="firstImage"
      src={url}
      />
    )
  })
return(
  <div className ="Images">
    {images}
  </div>
)
}
}
export default Images; 
