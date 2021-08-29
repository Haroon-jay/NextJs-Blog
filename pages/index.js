import React from 'react'
import Hero from '../components/home-page/Hero'
import FeaturedPosts from '../components/home-page/FeaturedPosts'
import { getFeaturedPosts } from '../lib/post-util'
import Head from 'next/head'

const Homepage = ({posts}) => {
    return (
        <>
        <Head>
            <title>Haroon&apos;s Blog</title>
            <meta name="description" content="I post about programming and web development" />
        </Head>
          <Hero/>
          <FeaturedPosts posts={posts}/>  
        </>
    )
}
export async function getStaticProps(){
const featuredPosts=getFeaturedPosts()
return{
    props:{
        posts:featuredPosts
    },revalidate:10000
}
}
export default Homepage
