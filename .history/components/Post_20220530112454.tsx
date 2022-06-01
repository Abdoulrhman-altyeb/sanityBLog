import { NextPage } from "next"
import { Post } from "../types"

const SinglePost:NextPage<Post> = ({single}) => {
    console.log(single);
  return (
    <div>Post</div>
  )
}

export default SinglePost