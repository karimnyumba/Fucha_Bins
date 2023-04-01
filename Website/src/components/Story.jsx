import React from 'react';

const OurStory = () => {
  return (
    <div className='w-full h-[80vh] bg-black flex flex-col justify-between overflow-x-hidden' id='ourstory'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className="flex items-center">
          <h1 className='text-white text-3xl md:text-7xl font-bold'>Our Story</h1>
        </div>
        <div className='flex flex-col justify-center ml-10 md:items-start w-full px-2 py-10'>
          <p className='text-gray-600 text-2xl'>
            In Tanzania and other developing countries, plastic waste is a major issue due to lack of education on waste management.
            FUCHA bins, made by skilled artisans from recycled metal, will be placed in strategic areas to serve as plastic collection points. This will create sustainable jobs and provide eco-bricks and eco-tiles for disadvantaged areas. Funds for a plastic plant will also be raised through the sale of 5 NFTs.
            In the future, a d'app will provide incentives for stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
