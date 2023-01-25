import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
const closeMenu = () => {
    setNavbarOpen(false)
}
    return (
    <nav className='navBar'>
        <button onClick={handleToggle}>{navbarOpen ? (
    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "greenyellow", width: "40px", height: "40px" }} />
  )}</button>
       
       
        <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            {/* this is where the options go */}
            <Link to='/' onClick={closeMenu}>Home</Link>
            <Link to='/pistol' onClick={closeMenu}>Pistol</Link>
            <Link to='/Rifle' onClick={closeMenu}>Rifle</Link>
            
        </div>


    </nav>

    
  )
}

export default Navbar