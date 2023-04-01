import React, { useState } from 'react'
import {BiMenuAltLeft} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

    const[nav , setNav] = useState(false)

    const HandleNav = () =>{
        setNav(!nav)
    }

    const connectWallet =  async  () => {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    
  }
}

  return (
    // desktop
    <div className='w-screen h-[80px] z-10 bg-black/95 sticky top-0 drop-shadow-lg'>
        <div className='px-5 w-full h-full flex justify-between items-center'>
            <div className='flex items-center'>
                <h1 className='font-bold text-xl text-white mr-5 sm:text-4xl '>Fucha<span className='font-bold text-xl mr-5 sm:text-4xl text-[#f9004d]'>-Bins</span></h1>
                <ul className='hidden md:flex text-white'>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#ourstory">Our Story</a>
                        </li>
                        <li>
                            <a href="#whoweare">Who We are</a>
                        </li>
                        <li>
                            <a href="#impact">Impact</a>
                        </li> 
                         <li>
                            <a href="#marketplace">Our NFTs</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                </ul>
                <div className="flex items-center">
                        <button onClick={connectWallet} className='w-full px-6 py-2 rounded-md bg-[#f9004d] text-white font-bold hover:bg-red-600 transition-colors duration-300'>
                            Connect to Wallet
                        </button>
                    </div>
            </div>

            {/* hamburger menu */}
            <div className='md:hidden' onClick={HandleNav}>
                {
                    !nav? <BiMenuAltLeft size={30} className="cursor-pointer text-white"/> : <AiOutlineClose size={30} className="cursor-pointer text-white"/>
                }
            </div>
        </div>

        {/* mobile navbar */}
  
                <ul className= {!nav ? "hidden " : 'w-full absolute px-8 bg-black/95'}>
                         <li className='border-b-1 w-full text-white'>
                            <a href="/">Home</a>
                        </li>
                        <li className='border-b-1 w-full text-white'>
                            <a href="#ourstory">Our Story</a>
                        </li>
                        <li className='border-b-1 w-full text-white'>
                            <a href="#whoweare">Who we are</a>
                        </li>
                        <li className='border-b-1 w-full text-white'>
                            <a href="#impact">Impact</a>
                        </li>
                        <li className='border-b-1 w-full text-white'>
                            <a href="#market">Our NFTs</a>
                        </li>
                        <li className='border-b-1 w-full text-white'>
                            <a href="#contact">Contact</a>
                        </li>
                </ul>
    </div>
  )
}

export default Navbar