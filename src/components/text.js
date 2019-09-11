import React, { Component } from 'react' 
import TextHeader from './textHeader.js'


class Text extends Component {

  constructor(props){
    super(props); 
    this.state = {
      text: props.text,
      header: props.header
    }
  }
  render(){

    return(
      <div>
      {/* <TextHeader text={this.state.header}/> */}
      <section className="TextBox">
        {this.state.text}
      </section>
      </div>
    )

  }

}

export default Text; 
