import React, { Component } from 'react'; 

class TextHeader extends Component{

  constructor(props){
    super(props); 
    this.state = {
      text: props.text,
    }
  }

  render(){
    return(
      <>
      <h2>
        {this.state.text}
      </h2>
      </>
    )
  }
}

export default TextHeader; 
