import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import PostHeader from './PostHeader'
import ReactMarkdown from 'react-markdown'
import classes from "./post-content.module.css"
import Image from "next/image"


const PostContent = ({dummyPost}) => {
 
    return (
        <article className={classes.content}>
            <PostHeader title={dummyPost.title} image={dummyPost.image}/>
          <ReactMarkdown  
     components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              PreTag="div"
              style={atomDark}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}
     children={dummyPost.content}/>
        </article>
    )
}

export default PostContent
