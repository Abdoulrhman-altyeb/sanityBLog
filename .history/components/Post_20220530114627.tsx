import { NextPage } from "next"
import { urlFor } from "../sanity";

// interface Props {
//     // single:Post
//     key:string;
// }

const SinglePost:NextPage = ({single}) => {
    console.log(single); 
  return (
    <div>
        <div>
            <img src={urlFor(single.mainImage.asset).width(200).url()} alt='blogBanner'/>
            {/* <img src={single.mainImage.asset._ref} alt='banner'/> */}
        </div>
        <div>
            <div>
                <h1>{single.title}</h1>
                <p></p>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default SinglePost