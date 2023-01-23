import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Shotgun = () => {
    return (
      <div>
        <Header />
        <h1>Shotgun</h1>
        <ul>    
            
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/Gauge'>
          <button>12 Gauge</button>
          </Link>
          </ul>
      </div>
    )
  }

export default Shotgun