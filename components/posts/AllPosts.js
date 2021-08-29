import React from 'react'
import classes from "./all-posts.module.css"
import PostGrid from './post-grid'
const AllPosts = ({posts}) => {
    console.log("aldfkjfbewkjfbwkejfbwejkfbl",posts)
    return (
        <div className={classes.posts}>
            <h1>All Posts</h1>
            <PostGrid posts={posts} />
        </div>
    )
}

export default AllPosts
