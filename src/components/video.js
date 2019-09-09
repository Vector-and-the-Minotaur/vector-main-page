import React, { Component } from 'react'; 
import { Player } from 'video-react';

class Video extends Component {

  constructor(props){
    super(props); 
    this.state = {
      poster: props.poster,
      source: props.source
    }
  }

  render(){

    return(
      <>
      <Player>
        playsInLine
        poster={this.state.poster}
        src={this.state.source}
      </Player>
      </>
    )

  }

}

export default Video; 
