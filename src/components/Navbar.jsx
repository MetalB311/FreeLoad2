import React, { useState } from 'react'


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
  
    return (
    <nav className='navBar'>
        <button>{navbarOpen ? "Close" : "Open"}</button>
        <ul>
            {/* Im pretty sure this is where the options go */}
        </ul>
    </nav>

    
  )
}

export default Navbar