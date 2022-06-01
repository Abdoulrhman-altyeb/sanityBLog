import { NextPage } from "next"
import { Post } from "../types"

const SinglePost:NextPage = ({single}:Post) => {
    console.log(single);
  return (
    <div>a single post</div>
  )
}

export default SinglePost