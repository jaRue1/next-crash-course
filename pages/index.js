import ArticlesList from '../components/ArticleList'
import { server } from '../config'
export default function Home({articles}) { // #4 pass in articles as props into functional component
  
  return (
    <div>
       <ArticlesList articles={articles} /> {/* #5 pass articles as props to ArticlesList component */}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`) // #1 fetch articles from api
  const articles = await res.json() // #2 store the value of the api call in the var articles
  return { // #3 return var articles as props 
    props: {
      articles 
    }
  }
}
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`) // #1 fetch articles from api
//   const articles = await res.json() // #2 store the value of the api call in the var articles
//   return { // #3 return var articles as props 
//     props: {
//       articles 
//     }
//   }
// }