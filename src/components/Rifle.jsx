import React from 'react'
// import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Img223 from '../images/223.jpg'
import Img308 from '../images/308.jpg'

const Rifle = () => {
    return (
      <div>
        <Header />
          <h1>Rifle</h1>
        <ul>
        {/* <Link to='/'>
          <button>Home</button>
          </Link> */}

        <a href="/Remington" onclick="event.preventDefault()">223Remington<img src={Img223} alt='223Remington' height='300px' width='300px'></img>
        </a>

        <a href="/Winchester" onclick="event.preventDefault()">308Winchester<img src={Img308} alt='308Winchester' height='300px' width='300px'></img>
        </a>

          {/* <Link to='/Remington'>
          <button>223 Remington</button>
          </Link> */}

          {/* <Link to='/Winchester'>
          <button>308 Winchester</button>
          </Link> */}



        </ul>
      </div>
    )
  }

export default Rifle