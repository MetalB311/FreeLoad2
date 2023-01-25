import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import axios from 'axios'


const Winchester = () => {
  const [data, setData] = useState()
  useEffect( () => {
    axios
    .get('http://localhost:4000/308Winchester')
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])

if(!data) return (
  <div>
    <Header />
    <h1>Loading</h1>
  </div>
)

  return (
    <div>
      <Header />
        <h1>308 Winchester</h1>
       
        <h2>{data[0].platform} {data[0].weight} {data[0].type} {data[0].powder} {data[0].grains} {data[0].velocity} {data[0].primer}</h2>
        <h2>{data[1].platform} {data[1].weight} {data[1].type} {data[1].powder} {data[1].grains} {data[1].velocity} {data[1].primer}</h2>
        <h2>{data[2].platform} {data[2].weight} {data[2].type} {data[2].powder} {data[2].grains} {data[2].velocity} {data[2].primer}</h2>
        
    </div>
  )
}

export default Winchester