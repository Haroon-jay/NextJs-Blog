import React from 'react'
import PostContent from '../../components/posts/post-detail/PostContent'
import { getPostData } from '../../lib/post-util'
import Head from 'next/head'
const PostDetailPage = ({posts}) => {
    console.log(posts)
    return (
        <>
       <Head>
      <title> {posts.title} </title>
      <meta name="description" content={posts.excerpt} />
      </Head> 
      <PostContent dummyPost={posts}/>
    </>
    )
}
export  function getStaticProps({params:{slug}}){
 console.log(slug)   
const data=getPostData(`${slug}.md`)
return{
    props:{
        posts:data
    },
    revalidate:1000
}
}

export function getStaticPaths(){
    return{
        paths:[
            {params:{slug:"getting-started-with-next"}}
        ],
        fallback:"blocking"
    }
} 
export default PostDetailPage
