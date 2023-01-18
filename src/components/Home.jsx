import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <br />
        <ul>
          
          <li>
            <Link to='/'>Home</Link>
          </li>
          
          <li>
            <Link to='/Pistol'>Pistol</Link>
          </li>
          
          <li>
            <Link to='/Rifle'>Rifle</Link>
          </li>
          
          <li>
            <Link to='/Shotgun'>Shotgun</Link>
          </li>

        </ul>
    </div>
  )
}

export default Home