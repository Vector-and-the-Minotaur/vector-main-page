import React, {Component} from 'react' 
import NavLink from './navLinks'

class Navigation extends Component {
  render(){
    return(
      <>
      <ul className='nav'>
      <NavLink text='About Us' link=''/>
      <NavLink text='Git Hub' link='https://github.com/Vector-and-the-Minotaur' /> 
      <NavLink text='Anki Vector API' link='https://developer.anki.com/vector/docs/index.html'/> 
     </ul>
     </>
    )
  }
}

export default Navigation
