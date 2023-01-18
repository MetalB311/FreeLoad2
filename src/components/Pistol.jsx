import React from 'react'
import { Link } from 'react-router-dom'


const Pistol = () => {
  return (
    <div>
        <h1>Pistol Page</h1>
        <ul>
            <li>
            <Link to='/Mill'>9MM</Link>
            </li>
        </ul>
    </div>
  )
}


export default Pistol