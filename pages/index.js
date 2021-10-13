import Head from 'next/head'
import ArticlesList from '../components/ArticleList'

export default function Home({articles}) { // #4 pass in articles as props into functional component
  
  return (
    <div>
       <Head> WebDev Stuff
        <meta name='keywords' content='web, development, programming'/>
       </Head>
       <ArticlesList articles={articles} /> {/* #5 pass articles as props to ArticlesList component */}
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`) // #1 fetch articles from api
  const articles = await res.json() // #2 store the value of the api call in the var articles
  return { // #3 return var articles as props 
    props: {
      articles 
    }
  }
}