import React, { useState } from 'react'


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
    <nav className='navBar'>
        <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
       
       
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            {/* Im pretty sure this is where the options go */}
        </ul>


    </nav>

    
  )
}

export default Navbar