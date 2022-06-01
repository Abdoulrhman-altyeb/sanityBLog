import { NextPage } from "next"
import Post from '../types'

interface post {
    single : Post
}

const SinglePost:NextPage = ({single}) => {
    console.log(single);
  return (
    <div>a single post</div>
  )
}

export default SinglePost