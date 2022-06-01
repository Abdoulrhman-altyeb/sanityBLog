import { NextPage } from "next"
import { urlFor } from "../sanity";
import Image from "next/image";

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
        <div className="flex items-center p-2 ">
            <div>
                <h1 className="font-bold">{single.title}</h1>
                <p className="tracking-tighter text-gray-500">{single.description}</p>
            </div>
            <div className="flex justify-center items-center">
                <Image className="rounded-full " href={urlFor(single.author.image.asset._ref).url()} width={14} height={12} alt='progileImg' />
            </div>
        </div>
    </div>
  )
}

export default SinglePost