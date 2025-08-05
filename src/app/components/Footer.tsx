import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black'>
      <h1 className='text-red-800 text-2xl font-bold p-2 pl-6'>About Us</h1>
      <p className='text-white text-sm p-2 pl-6'>At Desi Nawab, we bring you the rich flavors of traditional desi food straight from a clean and caring home kitchen.
        Our meals are freshly prepared in a hygienic environment, using quality ingredients and homemade recipes that have been passed down for generations.</p>
        <div className='text-white align items-center pl-5 mt-2'>
        
        <div><FaFacebook size={20} color='blue'/>Yasmin Punjwani</div>
        <div><FaPhoneAlt size={20} color='red'/>0334-7753424</div>
        </div>
        <div>
          <p className='text-second text-center mt-3'>&copy; Copyright Desi Nawab 2025 | All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer;