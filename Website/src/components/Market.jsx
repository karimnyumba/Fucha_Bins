import React, { useState } from 'react';
import fuchaHippo from '../assets/fuchaHippo.jpg';
import fuchaRhino from '../assets/fuchaRhino.jpg';
import fuchaSimba from '../assets/fuchaSimba.jpg';
import fuchaNyati from '../assets/fuchaNyati.jpg';
// import { mintNFt } from '../../../Smart Contract/scripts/mint';
import {Contract, ethers} from "ethers"
import { ABI,contract_address } from '../../constants';

const fee = 92;
const pictures = [
  { name: 'Fucha Hippo', price: '0.9tFil', src: fuchaHippo },
  { name: 'Fucha Rhino', price: '0.9tFil', src: fuchaRhino },
  { name: 'Fucha Simba', price: '0.9tFil', src: fuchaSimba },
  { name: 'Fucha Nyati', price: '0.9tFil', src: fuchaNyati },
];

const Marketplace = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

const makeNft = async (index) =>{

  try {
    const provider = new ethers.provider.web3Provider (window.ethereum)
    const signer = await provider.getSigner()
    const nftContract = new Contract(ABI,signer, contract_address)
    await nftContract.createNft(index, { value: fee.toString() })
    // await mintNFt()
  } catch (error) {
    console.log(error)
    
  }
}

  return (
    <div className='w-full py-30 bg-[#191919]' id='marketplace'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-white text-3xl mt-20 mb-5'>Our NFTs</h2>
        </div>
        <div className='flex justify-center mt-10'>
          {pictures.map((picture, index) => (
            <div
              key={picture.name}
              className='relative flex-shrink-0 w-60 h-60 mx-5 cursor-pointer'
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className='w-full h-full object-cover rounded-lg'
                src={picture.src}
                alt={picture.name}
              />
              {hoveredIndex === index && (
                <div className='absolute inset-0 flex flex-col justify-end p-4 bg-gray-900 bg-opacity-80 rounded-lg'>
                  <h3 className='text-white text-xl font-semibold mb-1'>{picture.name}</h3>
                  <p className='text-gray-300'>{picture.price}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-10'>
        <button onClick={ () => makeNft(0)} className='px-6 py-2 rounded-md bg-[#f9004d] text-white font-bold hover:bg-red-600 transition-colors duration-300'>
        Mint
        </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;