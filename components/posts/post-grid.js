import PostItem from "./PostItem"
import classes from "./post-grid.module.css"
function PostGrid({posts}){

    return <ul className={classes.grid}>
        {
            posts.map(post=><PostItem key={post.slug} item={post}/>)
        }
    </ul>
}
export default PostGrid