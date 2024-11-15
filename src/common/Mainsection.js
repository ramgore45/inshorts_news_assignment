import React from 'react'
import { NewsCard } from './NewsCard'
import { DOWN_APP_STORE_LOGO, DOWN_PLAY_STORE_LOGO } from '../constants/constants'

export const Mainsection = (
    {
        selectArticle, 
        newsArticles, 
        showArticles, 
        selectNewsArticleHandler, 
        setShowArticles
    }) => {

  return (
    <div className={`w-[62%] py-5 flex flex-col gap-y-5 ${selectArticle?'ml-2': 'mx-auto '}`}>
        <div className={`bg-[#f44336] flex justify-between gap-x-1 px-7 py-3 my-3 shadow-md ${selectArticle?'scale-95':'scale-110'}`}>
            <p className='font-light self-center text-white'>
                For the best experience use <span className='font-medium'>inshorts</span> app on smartphone
            </p>
            <div className='flex gap-x-5'>
                <img className='w-[40%] max-w-36'
                    src={DOWN_APP_STORE_LOGO} alt='download-app-store-logo'
                />
                <img className='w-[40%] max-w-36'
                    src={DOWN_PLAY_STORE_LOGO} alt='download-play-store-logo'
                />
            </div>
        </div>
            {
                newsArticles.slice(0, showArticles).map((news, index)=>(
                    <div key={index} className='w-full h-fit' 
                        onClick={()=>selectNewsArticleHandler(news)}
                    >    
                        <NewsCard news={news} selectArticle={selectArticle}/>
                    </div>
                ))
            }

            <button className='px-8 my-2 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.2)] self-center rounded-sm'
                onClick={()=>setShowArticles(showArticles+10)}
            >
                Load More
            </button>

        </div>
  )
}
