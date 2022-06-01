import { NextPage } from "next"

// interface Props {
//     // single:Post
//     key:string;
// }

const SinglePost:NextPage = ({single}) => {
    console.log(single); 
  return (
    <div>
        <div>
            <img src={single.mainImage.asset._ref} alt='banner'/>
        </div>
        <div>
            <div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default SinglePost