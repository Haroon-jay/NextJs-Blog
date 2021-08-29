import React from 'react'
import Link from "next/link"
import Image from "next/image"
import classes from "./post-item.module.css"
const PostItem = ({item:{title,image,excerpt,date,slug}}) => {
    const readableDate=new Date(date).toLocaleDateString("en-US",{
        day:"numeric",
        month:"long",
        year:"numeric"
    })
    return (

        <li onClick={(e)=>console.log(e)} className={classes.post}>
<Link href={`/posts/${slug}`}>
<a>
    <div className={classes.image}>
   <Image src={image} alt={title} width={300} height={200} layout="responsive" />
    </div>
    <div className={classes.content}>
     <h3>{title}</h3>
     <time>{readableDate}</time>
     <p>{ excerpt}</p>
    </div>
</a>
</Link>
        </li>
    )
}

export default PostItem
