import React from 'react';
import { GiWaterBottle } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs';

const Impact = () => {
  return (
    <div className="bg-black py-20" id="impact">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-white font-bold text-3xl md:text-5xl text-center mb-10">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg px-8 py-12 flex flex-col items-center justify-center">
            <GiWaterBottle size={80} className="text-[#f9004d] mb-5" />
            <p className="text-white font-semibold text-xl md:text-2xl mb-2">
              Amount of Plastic Collected
            </p>
            <p className="text-slate-600 text-center">
              More than 5000 kg collected
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg px-8 py-12 flex flex-col items-center justify-center">
            <FaUserAlt size={60} className="text-[#f9004d] mb-5" />
            <p className="text-white font-semibold text-xl md:text-2xl mb-2">
              Amount of Carbon Eliminated
            </p>
            <p className="text-slate-600 text-center">
              More than 75% of carbon waste has been eliminated
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg px-8 py-12 flex flex-col items-center justify-center">
            <BsFillBellFill size={60} className="text-[#f9004d] mb-5" />
            <p className="text-white font-semibold text-xl md:text-2xl mb-2">
              Communities Reached
            </p>
            <p className="text-slate-600 text-center">
              More than 500 communities have been positively affected by Fucha Bins
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
