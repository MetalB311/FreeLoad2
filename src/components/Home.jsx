import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>FreeLoad</h1>
        <br />
        <ul>
          
          <button>
            <Link to='/'>Home</Link>
          </button>
          
          <Link to='/Pistol'>
          <button>Pistol</button>
          </Link>
          
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