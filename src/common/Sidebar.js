import React from 'react'
import { cateogories } from '../constants/constants'
import { useLocation, useNavigate } from 'react-router-dom'

export const Sidebar = ({category , setCategory, setSidebar}) => {

    const location = useLocation()
    const navigate = useNavigate()

    function matchRoute(path){
        console.log(location.pathname)
        return location.pathname === '/category/'+path
    }

    const categoryClickHandler = (cat)=>{
        setCategory(cat)
        setSidebar(false)
        navigate('/category/'+cat)
    }

  return (
    <div className='bg-[#303036] h-screen w-60 p-3'>
        <p className='text-gray-500 mt-5'>Categories</p>
        <div className=' flex flex-col'>
            {
                cateogories.map((cat)=>(
                    <button key={cat.id} className={`text-gray-200 flex text-xl font-light capitalize px-5 p-3 w-full
                        ${matchRoute(cat.name) ? 'bg-[#808290]' : 'hover:bg-black'}
                    `}
                        onClick={()=>categoryClickHandler(cat.name)}
                    >
                        {cat.name}
                    </button>
                ))
            }
        </div>
    </div>
  )
}
