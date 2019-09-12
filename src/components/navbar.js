import React, {Component} from 'react' 
import NavLink from './navLinks'

class Navigation extends Component {
 handleAbout() {
  window.location.replace("/about")
 }
  render(){
    return(
      <div className='nav'> 
      <ul>
      <NavLink text='Project Git Hub' link='https://github.com/Vector-and-the-Minotaur' /> 
      <NavLink text='Anki Vector API' link='https://developer.anki.com/vector/docs/index.html'/> 
     </ul>
     </div>
    )
  }
}

export default Navigation
