import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   
    <header className="header">
      <div className="navBar">
        <ul className="navMenu">
         <li className="navItem">
          <a href='#' className='navLink'>1</a>
         </li>
         <li className="navItem">
          <a href='#' className='navLink'>2</a>
         </li>
         <li className="navItem">
          <a href='#' className='navLink'>3</a>
         </li>
         <li className="navItem">
          <a href='#' className='navLink'>4</a>
         </li>

        </ul>
      </div>

    </header>
  )
}

export default Navbar