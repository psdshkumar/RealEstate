import React from 'react'

import { NavLink } from 'react-router-dom'
import '../Style/Nav.css'

const Nav = () => {
  return (
    <nav>
        

        <NavLink className="menu" to= '/' >Home</NavLink>
        <NavLink className="menu" to= '/About' >About Us</NavLink>
        <NavLink className="menu" to= '/Property' >Find Property</NavLink>
        <NavLink className="menu" to= '/contact' >Contact Us</NavLink>

    </nav>
        
      
    
  )
}

export default Nav
