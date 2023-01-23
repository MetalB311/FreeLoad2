import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Rifle = () => {
    return (
      <div>
        <Header />
          <h1>Rifle</h1>
        <ul>
        <Link to='/'>
          <button>Home</button>
          </Link>
          <Link to='/Ar'>
          <button>.223/556</button>
          </Link>
        </ul>
      </div>
    )
  }

export default Rifle