import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { LOGO_INSHORTS, LOGO_INSHORTS_FOOTER } from '../constants/constants';

export const Footer = () => {
  return (
    <div className=' bg-[#303036] '>
        <div className='flex justify-between mx-auto w-[68%] py-6'>
            <div className='flex'>
                <div className='border-r border-white pr-2'>
                    <img className='h-16 mb-2'
                        src={LOGO_INSHORTS_FOOTER}
                        alt='logo-inshorts'
                    />
                    <div className='text-end pr-2'>
                        <p>
                            <span className='text-white font-medium'>Inshorts { }</span>
                            <span className='text-gray-500'>Pvt. Ltd.</span>
                        </p>
                        <p className='text-gray-500 text-sm'>@COPYRIGHT 2024</p>
                    </div>
                </div>
                <div className='pl-4 text-white space-y-2 pt-6 w-40 text-sm'>
                    <p>Contact Us</p>
                    <p>Terms & conditions Privacy policies</p>
                </div>
            </div>
            <div className='flex gap-5 self-end'>
                <FaFacebookF className='text-white text-3xl'/>
                <FaTwitter className='text-white text-3xl'/>
                <FaLinkedinIn className='text-white text-3xl'/>
            </div>
        </div>
    </div>
  )
}
