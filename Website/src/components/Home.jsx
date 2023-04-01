import React from 'react'
import video  from "../assets/Chatafisha-2.mp4";

const Home = () => {
  return (
   <video autoPlay muted loop>
    <source src={video} type="video/mp4"/>
   </video>

  )
}

export default Home
