import { NextPage } from "next"
import { urlFor } from "../sanity";

// interface Props {
//     // single:Post
//     key:string;
// }

const SinglePost:NextPage = ({single}) => {
    console.log(single); 
  return (
    <div className="flex shadow-custom flex-col ">
        <div>
            <img className=' w-full h-64 object-cover' src={urlFor(single.mainImage.asset).url()} alt='blogBanner'/>
            {/* <img src={single.mainImage.asset._ref} alt='banner'/> */}
        </div>
        <div className="flex items-center p-2 justify-between">
            <div>
                <h1 className="font-bold">{single.title}</h1>
                <p className="tracking-tighter text-gray-500">{single.description}</p>
            </div>
                <img className=" h-3 w-3" src={urlFor(single.author.image.asset._ref).url()} alt='progileImg'/>
        </div>
    </div>
  )
}

export default SinglePost