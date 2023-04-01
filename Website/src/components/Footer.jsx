import React from 'react';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-300 py-8" id="contact">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div className="col-span-2 md:col-span-3 pt-8 md:pt-2 flex flex-col items-center md:items-end">
          <p className="text-lg font-bold mb-2">Contact Us:</p>
          <div className="flex items-center mb-1">
            <IoIosMail className="mr-2" />
            <a href="mailto:info@chatafisha.com">info@chatafisha.com</a>
          </div>
          <div className="flex items-center mb-1">
            <FaDiscord className="mr-2" />
            <a href="https://discord.gg/nUKaH5fz">Join our Discord server</a>
          </div>
        </div>
        <div className="col-span-2 md:col-span-3 pt-8 md:pt-2 flex flex-col items-center md:items-start">
          <p className="text-lg font-bold mb-2">Explore</p>
          <div className="flex items-center mb-1">
            <FaGithub className="mr-2" />
            <a href="https://github.com/Rasta669/Fucha-on-FVM">GitHub</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">
          &copy; 2023{' '}
          <span className="font-bold text-lg mr-5 text-[#f9004d]">Fucha-Bins</span>
          All rights reserved
        </p>
        <div className="flex justify-center sm:justify-end items-center sm:pl-4 pt-4 text-2xl">
          <div className="mr-4">
            <a href="https://discord.gg/nUKaH5fz" className="hover:text-[#7289da] transition-colors duration-300">
              <FaDiscord />
            </a>
          </div>
          <div className="mr-4">
            <a href="https://twitter.com/chatafisha?t=Wgh3Tm_k60D5VqV9GxcONQ&s=09" className="hover:text-[#1da1f2] transition-colors duration-300">
              <FaTwitter />
            </a>
          </div>
          <div className="mr-4">
            <a href="https://github.com/Rasta669/Fucha-on-FVM" className="hover:text-gray-400 transition-colors duration-300">
              <FaGithub />
            </a>
          </div>
          <div>
            <a href="info@chatafisha.com" className="hover:text-gray-400 transition-colors duration-300">
              <IoIosMail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;