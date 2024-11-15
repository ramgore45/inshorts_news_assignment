import React from 'react'
import { LOGO_INSHORTS_MAIN } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className='flex fixed bg-white px-6 w-screen border-b shadow-md z-10'>
        <div className=' mx-auto cursor-pointer'
          onClick={()=> navigate('/')}
        >
            <img className='h-20 '
                src={LOGO_INSHORTS_MAIN} 
                alt='logo-inshorts'
            />
        </div>
    </div>
  )
}
