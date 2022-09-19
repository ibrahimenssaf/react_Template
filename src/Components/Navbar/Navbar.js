import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navstyle.css'
 const Navbar = () => {
  return (
    <div className='nav'>
        <div className='container'>
            <a className='logo' href='#'>Enssaf</a>

            <ul className='list-style'>
                <li><Link to='/'>Home</Link></li>
                <li><a href='#work'>Work</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Resume</a></li>
                <li><a href='#'>About</a></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}


export default Navbar




















