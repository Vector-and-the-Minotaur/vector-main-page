import React, {Component} from 'react' 
import NavLink from './navLinks'

class Navigation extends Component {
  render(){
    return(
      <div className='nav'> 
      <ul>
      <li>
      <NavLink text='About Us' link=''/>
      </li>
      <li>
      <NavLink text='Git Hub' link='https://github.com/Vector-and-the-Minotaur' /> 
      </li>
      <li>
      <NavLink text='Anki Vector API' link='https://developer.anki.com/vector/docs/index.html'/> 
      </li>
     </ul>
     </div>
    )
  }
}

export default Navigation
