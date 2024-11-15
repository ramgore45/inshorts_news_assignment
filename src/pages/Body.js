import React, { useEffect, useState } from 'react'
import { NewsCard } from '../common/NewsCard'
import { API_KEY } from '../constants/constants'
import { Footer } from '../common/Footer'
import { useParams } from 'react-router-dom'
import { SelectedArticle } from '../common/SelectedArticle'
import { Mainsection } from '../common/Mainsection'

export const Body = ({category}) => {

    const [newsArticles, setNewsArticles] = useState([])
    const [showArticles, setShowArticles] = useState(15)
    const [selectArticle, setSelectArticle] = useState()

    const getNewsFunction = async(category)=>{
        const result = await fetch(`https://newsapi.org/v2/top-headlines?${category?`category=${category}`:'country=us'}&apiKey=e8a2941ffc1b472499bd51afc21cc534`)
        const data = await result.json()
        console.log(data)
        setNewsArticles(data.articles)
        setSelectArticle()
    }

    useEffect(()=>{
        getNewsFunction(category)
        setShowArticles(15)
    },[category])

    const selectNewsArticleHandler = (news)=>{
        const article = newsArticles.find((data)=> data?.title === news?.title)
        console.log(article)
        if(article?.title === selectArticle?.title){
            return setSelectArticle()
        }
        return setSelectArticle(article)
    }

    useEffect(()=>{
        console.log(selectArticle)
    },[selectNewsArticleHandler])

  return (
    <div className='flex relative'>
        <Mainsection 
            selectArticle={selectArticle} 
            newsArticles={newsArticles} 
            showArticles={showArticles} 
            selectNewsArticleHandler={selectNewsArticleHandler} 
            setShowArticles={setShowArticles}
        />

        {selectArticle && 
            (
                <div className='w-[36%] max-h-[605px] fixed right-2 top-24 bottom-2 z-0 overflow-y-auto'>
                    <SelectedArticle selectArticle={selectArticle}/>
                </div>
            )
        }
    </div>
  )
}
