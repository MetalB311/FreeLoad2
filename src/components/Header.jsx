import React from 'react'
// import HomeImg from '../images/home.jpg'
import Navbar from '../components/Navbar'
import { FaHome } from 'react-icons/fa'
// import { FiMenu } from 'react-icons/fi'

const Header = () => {
  return (
    <header>
          
          <a href="/" onclick="event.preventDefault()"><FaHome style={{ color: "greenyellow", width: "40px", height: "40px" }} />
          </a>
        
       
              {/* Use this to use HomeImg you imported on line2 */}
        {/* <img src={HomeImg} alt='Home' height='100px' width='100px'/> */}


        
        <h1>FreeLoad</h1>

        <Navbar />

        </header>
  )
}

export default Header