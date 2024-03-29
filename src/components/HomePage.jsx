import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
  
  useEffect(()=>{

  })

    return (
    <div>
      <h1>Home Page</h1>
      <Link to='/login' style={{textDecoration: 'none', fontSize:'large', fontWeight:'bold',marginBottom:"10px"}}>Login</Link> <br/>
      <Link to='/signup' style={{textDecoration: 'none', fontSize:'large', fontWeight:'bold',marginTop:"10px"}}>New User? click here</Link>

    </div>
  )
}

export default HomePage
