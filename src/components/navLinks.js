import React, { Component } from 'react'; 

class NavLink extends Component{

  constructor(props){
    super(props); 
    this.state = {
      text: props.text,
      link: props.link,
    }
  }

  render(){
    return(
      <>
      <li className="NavLink">
        <a href={this.state.link}> {this.state.text} </a>
      </li>
      </>
    )
  }
}

export default NavLink; 
