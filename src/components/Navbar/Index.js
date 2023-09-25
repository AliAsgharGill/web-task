import React from 'react'
import {Link} from 'react-router-dom'
import * as Icon  from "react-icons/bs";
function Navbar() {
  return (
    <>
     <div className='navbar'>
        <Link to='#' className='menu-bars'>
        <Icon.BsCCircleFill />
        </Link>
        </div> 
    </>
  )
}

export default Navbar
