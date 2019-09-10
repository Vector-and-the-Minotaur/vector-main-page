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
      <div class="videoWrapper">
     <video className='video' controls='controls' controlslist='nodownload' width="512" height='288' src={this.props.source}/>
     </div>
      </>
    )
  }
}

export default Video
