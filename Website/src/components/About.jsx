import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../assets/1.png"

const About = () => {
return (
<div className='w-full h-screen bg-[#191919] flex flex-col justify-between overflow-x-hidden ' id='whoweare'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
    <div>
    <img className='w-full py-10 px-4' src={image1} alt="/" />
    </div>
    <div className='flex flex-col justify-center ml-10 md:items-start w-full px-2 py-10'>
    <h1 className='text-white text-3xl md:text-7xl font-bold'>Who we Are</h1>
    <p className='text-white  font-semibold text-2xl px-2 py-3'>Bins Of The <span className='text-[#f9004d]'>FU-CHA</span></p>
    <p className='text-slate-600 text-2xl '>We are a platform for positive social change,
        through information, education and technology.
        Our objective is to sustainably empower our communities,
        while also encouraging integration in the urban space, through innovative initiatives.</p>
        <Link to= "/learnmore" className='px-6 py-2 rounded-md bg-[#f9004d] text-white font-bold hover:bg-red-600 transition-colors duration-300'>
        Learn More
        </Link>
        </div>
    </div>
</div>
)
}

export default About