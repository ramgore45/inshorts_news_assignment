import React from 'react'

export const SelectedArticle = ({selectArticle}) => {

    const date = new Date(selectArticle?.publishedAt);

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
    <div className='w-full p-4 bg-gray-300 rounded-md flex flex-col gap-y-1 font-light'>
        <p className='text-2xl font-normal'>{selectArticle?.title}</p>
        <div className='text-sm'>
            <span className='font-semibold'>short</span>
            <span className='text-gray-500'>{` by ${selectArticle?.author} / ${formattedDate}`}</span>
        </div>
        <img className='rounded-lg w-full'
            src={selectArticle?.urlToImage}
            alt='article-img'
        />
        <p className='text-lg'>{selectArticle?.description}</p>
        <p className='text-gray-700'>{selectArticle?.content}</p>
    </div>
  )
}
