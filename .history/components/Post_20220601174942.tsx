import { NextPage } from "next"
import Link from "next/link";
import { urlFor } from "../sanity";
import { Post } from "../types";

// interface Props {
//     // single:Post
//     key:string;
// }

const SinglePost:NextPage<Post> = ({title,slug,author,description,mainImage}) => {
  return (
    <Link href={`/post/${slug.current}`}>
            <div className="flex shadow-custom flex-col cursor-pointer group">
                <div className="overflow-hidden">
                    <img className=' w-full h-64 object-cover group-hover:scale-105 transition-transform duration-150' src={urlFor(mainImage.asset).url()} alt='blogBanner'/>
                    {/* <img src={single.mainImage.asset._ref} alt='banner'/> */}
                </div>
                <div className="flex items-center p-1 justify-between">
                    <div>
                        <h1 className="font-bold">{title}</h1>
                        <p className="tracking-tighter text-gray-500">{description}</p>
                    </div>
                    <div>
                        <img className="w-7 h-7 sm:w-12 sm:h-12 rounded-full ml-4 object-cover " src={urlFor(author.image.asset._ref).url()} alt='progileImg'/>
                    </div>
                </div>
            </div>
    </Link>
  )
}

export default SinglePost