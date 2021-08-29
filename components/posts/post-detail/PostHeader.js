import React from 'react'
import Image from "next/image"
import classes from "./post-header.module.css"
const PostHeader = ({title,image}) => {
    return (
        <header className={classes.header}>
           <h2>{title}</h2>
           <Image src={image} alt={title} height={150} width={200} />
        </header>
    )
}

export default PostHeader
