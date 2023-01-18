import React from 'react'
import { Link } from 'react-router-dom'

const Rifle = () => {
    return (
      <div>
          <h1>Rifle Page</h1>
          <ul>
            <li>
            <Link to='/Ar'>.223/556</Link>
            </li>
        </ul>
      </div>
    )
  }

export default Rifle