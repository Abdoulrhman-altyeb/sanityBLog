import { NextPage } from "next"
import { Post } from "../types"

const SinglePost:NextPage<Post> = ({post}) => {
    console.log(post);
  return (
    <div>Post</div>
  )
}

export default SinglePost