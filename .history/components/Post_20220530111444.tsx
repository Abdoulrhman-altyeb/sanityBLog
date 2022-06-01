import { NextPage } from "next"
import { Post } from "../types"

const SinglePost:NextPage<Post> = ({post}:Post) => {
  return (
    <div>Post</div>
  )
}

export default SinglePost