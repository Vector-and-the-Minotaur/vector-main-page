import React, { Component } from 'react' 


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
      <div className="TextBox"> 
      <section>
        {this.state.text}
      </section>
      </div>
    )

  }

}

export default Text; 
