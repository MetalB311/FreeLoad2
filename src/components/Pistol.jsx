import React from 'react'
// import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Img9mm from '../images/9mm.jpg'
import Img10mm from '../images/10mm.jpg'
import Img45colt from '../images/45colt.jpg'

const Pistol = () => {
  return (
    <div>
      <Header />
        <h1>Pistol</h1>
        <ul>
          
          {/* <Link to='/'>
          <button>Home</button>
          </Link> */}
          <a href="/Mill" onclick="event.preventDefault()">9MM<img src={Img9mm} alt='9MM' height='300px' width='300px'></img>
          </a>

          <a href="/MM" onlcick="event.preventDefault()">10MM<img src={Img10mm} alt='10MM' height='300px' width='300px'></img> 
          </a>

          <a href="/Colt" onclick="event.preventDefault()">45Colt<img src={Img45colt} alt='45Colt' height='300px' width='300px'></img>
          </a>
          

          {/* <Link to='/Mill'>
          <button>9MM</button>
          </Link> */}
            
          {/* <Link to='/MM'>
          <button>10MM</button>
          </Link> */}

          {/* <Link to='/Colt'>
          <button>45 Colt</button>
          </Link> */}


        </ul>
    </div>
  )
}


export default Pistol