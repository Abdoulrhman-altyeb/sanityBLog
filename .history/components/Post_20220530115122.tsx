import { NextPage } from "next"
import { urlFor } from "../sanity";

// interface Props {
//     // single:Post
//     key:string;
// }

const SinglePost:NextPage = ({single}) => {
    console.log(single); 
  return (
    <div className="flex flex-col">
        <div>
            <img src={urlFor(single.mainImage.asset).url()} alt='blogBanner'/>
            {/* <img src={single.mainImage.asset._ref} alt='banner'/> */}
        </div>
        <div className="flex">
            <div>
                <h1>{single.title}</h1>
                <p>{single.description}</p>
            </div>
            <div className=" ">
                <img className="rounded-full w-14 h-14" src={urlFor(single.author.image.asset._ref).url()} alt='progileImg'/>
            </div>
        </div>
    </div>
  )
}

export default SinglePost