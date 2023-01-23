import React from 'react'
import HomeImg from '../images/home.jpg'

const Header = () => {
  return (
    <header>
          
          <a href="/" onclick="event.preventDefault()"><img src={HomeImg} alt='Home' height='50px' width='50px'></img>
          </a>
        
        <h1>FreeLoad</h1>
        </header>
  )
}

export default Header