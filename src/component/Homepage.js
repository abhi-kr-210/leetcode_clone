import React from 'react'
import "../styles/HomeStyle.css"
import { Link } from 'react-router-dom'
function Homepage() {
  return (
    <section className='homepage_container'>
    <div className='text-center about_text mb-5'>
    <p style={{fontWeight:"800",fontSize:"2.5rem",color:"white"}}>Hi!
     <span style={{color:"#fc9f32"}}> &nbsp;Welcome</span></p>
     <p style={{fontWeight:"800",fontSize:"2.5rem",color:"rgb(50 252 241)"}}> to the world's largest hub for coding enthusiasts!</p>
    </div>
    <div className='d-flex justify-content-center align-items-center'>
        <Link to="/dash" className='learn_more ' style={{textDecoration:"none"}}>
        Go To Dashboard
        </Link>
   </div>
    </section>
  )
}

export default Homepage