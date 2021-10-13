import React from 'react'
import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'
export default function ArticleList({articles}) { // #6 passing articles  as props from index.js
  return ( 
    // #7 mapping through all of the articles using a .map array method
    <div className={articleStyles.grid}>
      {articles.map(
        article => (<ArticleItem article={article} />)
        )}
    </div>
  )
}
