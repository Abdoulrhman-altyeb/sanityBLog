import { NextPage } from "next"
import { urlFor } from "../sanity";

// interface Props {
//     // single:Post
//     key:string;
// }

const SinglePost:NextPage = ({single}) => {
    console.log(single.mainImage.asset._ref); 
  return (
    <div>
        <div>
            <img src={urlFor.image(single.mainImage.asset._ref)} />
            {/* <img src={single.mainImage.asset._ref} alt='banner'/> */}
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