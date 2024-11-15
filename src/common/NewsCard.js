import React from 'react'

export const NewsCard = ({news, selectArticle}) => {

    const date = new Date(news?.publishedAt);

    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };

    const formattedDate = date.toLocaleString('en-GB', options).replace(',', ' on');

  return (
    <div className={`flex gap-x-4 p-3 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.2)] max-[1000px]:flex-col gap-y-2
        ${selectArticle?.title === news?.title ? 'bg-gray-300':''}
    `}>
        <img className='max-[1000px]:min-w-full max-[1000px]:max-w-full max-[1000px]:min-h-[280px] max-[1000px]:max-h-[280px]
                        min-w-[380px] max-w-[380px] min-h-[280px] max-h-[280px] object-cover rounded-md '
            src={news?.urlToImage} alt='news-img'
        />
        <div className='relative'>
            <div className=''>
                <h1 className='text-2xl font-light'>{news?.title}</h1>
                <div className='text-sm my-2'>
                    <span className='font-semibold'>short</span>
                    <span className='text-gray-500'>{` by ${news?.author} / ${formattedDate}`}</span>
                </div>
                <p className='my-2 text-lg font-light text-gray-700 '>{news?.content}</p>
                
            </div>
            <div className='text-black text-sm font-medium absolute bottom-2 max-[1000px]:bottom-0'>
                read more at { }
                <button>{news?.source?.name}</button>
            </div>
        </div>
    </div>
  )
}
