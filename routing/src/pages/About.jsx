import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  let navigate = useNavigate();

  return (
    <div>
      <button 
      onClick={()=>{
        navigate('/');
        
      }}
      className='bg-green-700 py-3 px-6 m-2 rounded-2xl cursor-pointer active:scale-95  '>Return to Home Page</button>
      <h1 className='flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bol text-3xl underline'>AboutPage</h1>
    </div>
  )
}

export default About
