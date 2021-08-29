import fs from "fs"
import path from "path"
import matter from "gray-matter"
const postsDirectory= path.join(process.cwd(),"content")
export function getPostData(fileName){
    const filePath=path.join(postsDirectory,fileName)
   const fileContent= fs.readFileSync(filePath,"utf-8")
 const {data,content} = matter(fileContent)
 const postSlug=fileName.replace(/\.md$/,"")
 const postDate={
     slug:postSlug,
     ...data,
     content
 }
 return postDate
}
export function getAllPost(){
const files=fs.readdirSync(postsDirectory)
 const allPosts=files.map(file=>getPostData(file))
 return allPosts
}
 export function getFeaturedPosts(){
    const allPosts=getAllPost()
    return allPosts.filter(post=>post.isFeatured)
}