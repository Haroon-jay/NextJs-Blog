import React from 'react'
import AllPosts from '../../components/posts/AllPosts'
import { getAllPost } from '../../lib/post-util'
import Head from 'next/head'
const AllPostsPage = ({posts}) => {
    console.log(posts)
    return (
       <> 
       <Head>
           <title>All Posts </title>
           <meta name="description"content="A list of All posts by Haroon" />
       </Head>
     <AllPosts posts={posts} />
     </>
    )
}
export async function getStaticProps(){
    const posts=getAllPost()
    
    return{
        props:{
            posts
        }
    }
}

export default AllPostsPage
