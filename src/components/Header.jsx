import React from 'react'
import HomeImg from '../images/home.jpg'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <header>
          
          <a href="/" onclick="event.preventDefault()"><img src={HomeImg} alt='Home' height='100px' width='100px'></img>
          </a>
        
        <h1>FreeLoad</h1>

        <Navbar />

        </header>
  )
}

export default Header