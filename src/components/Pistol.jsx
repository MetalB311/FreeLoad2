import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Pistol = () => {
  return (
    <div>
      <Header />
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