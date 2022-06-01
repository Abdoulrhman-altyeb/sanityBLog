import { NextPage } from "next"

interface post {
    single<Post>
}

const SinglePost:NextPage = ({single}) => {
    console.log(single);
  return (
    <div>a single post</div>
  )
}

export default SinglePost