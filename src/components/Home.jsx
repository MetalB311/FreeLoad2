import React from 'react'
// import { Link } from 'react-router-dom'
import PistolImg from '../images/glock.jpg'
import RifleImg from '../images/rifle.jpg'
import ShotgunImg from '../images/shotgun.jpg'
import Header from '../components/Header'


// import PistolImg from 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblueridgebrass.com%2Fproduct-tag%2Fbulk-reloading-bullets%2F&psig=AOvVaw37ANdiQ-2nKcsihVLB2OC_&ust=1674233274858000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPClvY-L1PwCFQAAAAAdAAAAABAJ'


const Home = () => {
  return (
    <div>
        <Header />
        
        <br />
            <ul>
          {/* <button>
            <Link to='/'>Home</Link>
          </button> */}
         
          <a href="/Pistol" onclick="event.preventDefault()"><img src={PistolImg} alt='Pistol' height='300px' width='300px'></img>
          </a>
         
          <a href="/Rifle" onclick="event.preventDefault()"><img src={RifleImg} alt='Pistol' height='300px' width='300px'></img>
          </a>
         
          <a href="/Shotgun" onclick="event.preventDefault()"><img src={ShotgunImg} alt='Pistol' height='300px' width='300px'></img>
          </a>


          {/* <Link to='/Pistol'>
          <button class='Pistol'><img src={PistolImg} alt='Pistol' />Pistol</button>
          </Link>
          */}
          {/* <TouchableOpacity></TouchableOpacity> */}
{/*           
          <Link to='/Rifle'>
          <button>Rifle</button>
          </Link>
          
          <Link to='/Shotgun'>
          <button>Shotgun</button>
          </Link> */}
          
        </ul>
    </div>
  )
}

export default Home