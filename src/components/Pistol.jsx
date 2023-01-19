import React from 'react'
import { Link } from 'react-router-dom'


const Pistol = () => {
  return (
    <div>
        <h1>Pistol</h1>
        <ul>
          
          <Link to='/'>
          <button>Home</button>
          </Link>
          <Link to='/Mill'>
          <button>9MM</button>
          </Link>
            
        </ul>
    </div>
  )
}


export default Pistol