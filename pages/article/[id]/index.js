import React from "react"
import Link from "next/Link"
import { useRouter } from "next/router"
function article({ article }) {
  // const router = useRouter()
  // const {id} = router.query
  return (
    <>
      This is article {article.id}
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Home</Link>
    </>
  )
}
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )
  const article = await res.json()
  return {
    props: {
      article,
    },
  }
}

export default article
