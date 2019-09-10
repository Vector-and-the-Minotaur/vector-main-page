import React, { Component } from 'react'

class Video extends Component{

  constructor(props){
    super(props); 
    this.state = {
      source: props.source,
    }
  }

  render(){
    return(
      <>
     <video controls='controls' controlslist='nodownload' width="512" height='288' src={this.props.source}/>
      </>
    )
  }
}

export default Video
