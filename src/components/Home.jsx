import React from 'react'
import { Link } from 'react-router-dom'
// import logo from 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblueridgebrass.com%2Fproduct-tag%2Fbulk-reloading-bullets%2F&psig=AOvVaw37ANdiQ-2nKcsihVLB2OC_&ust=1674233274858000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPClvY-L1PwCFQAAAAAdAAAAABAJ'

const Home = () => {
  return (
    <div>
        <h1>FreeLoad</h1>
        <br />
            <ul>
          {/* <button>
            <Link to='/'>Home</Link>
          </button> */}
          
          
          <Link to='/Pistol'>
          <button>Pistol</button>
          </Link>
          
          <Link to='/Rifle'>
          <button>Rifle</button>
          </Link>
          
          <Link to='/Shotgun'>
          <button>Shotgun</button>
          </Link>
          
        </ul>
    </div>
  )
}

export default Home