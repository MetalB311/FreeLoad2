import React from 'react'
import { Link } from 'react-router-dom'

const Shotgun = () => {
    return (
      <div>
          <h1>Shotgun Page</h1>
          <ul>
            <li>
            <Link to='/Gauge'>12 Gauge</Link>
            </li>
        </ul>
      </div>
    )
  }

export default Shotgun