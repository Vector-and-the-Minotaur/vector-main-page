import React, { Component } from 'react' 

class Logo extends Component{
  render(){
    return(
      <div className='logo'>
        <img className='logoImage' src='assets/mazeLogo.png' alt='A gold box with rounded corners surrounding a maze outlined in black.' ></img>
      </div>
    )
  }
}

export default Logo; 
