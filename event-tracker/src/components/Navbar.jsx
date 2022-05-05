import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='container'>
            <Link to="/" className='navbar-brand' >Event Tracker</Link>

            <ul className='nav-links'>
   
                <li><NavLink to="/" className="nav-link">Events</NavLink></li>
                <li><NavLink to="/" className="nav-link">Reminders</NavLink></li>
                <li><NavLink to="/" className="nav-link">Create</NavLink></li>


            </ul>
        </div>
    </nav>
  )
}

export default Navbar