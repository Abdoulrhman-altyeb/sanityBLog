import { GetStaticProps, NextPage } from "next"
import PortableText from 'react-portable-text'
import Header from "../../components/Header"
import { sanityClient,urlFor } from "../../sanity"
import { Post } from "../../types"


interface Props {
    post : Post
}

export const getStaticPaths = async () => {
    // first we fetch the data for each slug and return 
    const query = `*[_type=="post"] { 
        _id,
        slug{
            current
        },
    }`
    const posts = await sanityClient.fetch(query);
    const paths = posts.map((post:Post) => {
        return {
            params:{
                slug: post.slug.current
            }
        }
    })
    return{
        paths,
        fallback:"blocking"
    }
    
}

export const getStaticProps:GetStaticProps = async({params}) => {
    // the props called here the context from the get staticpaths
    // firest we query the slugs for each page with a grock command that 
    // specify the slug by the name with $slug command 
    const query = `*[_type=="post" && slug.current == $slug][0] { 
        _id,
        slug{
            current
        },
        title,
        body,
        author,
        mainImage,
        _createdAt,
        description,
        author -> {
            name,
            image
        }
}`
    const post = await sanityClient.fetch(query,{
        slug:params?.slug
    })
    //then return the post 
    // also we can check if the post is their of not 
    // cause the blocking fallback will generate a new 404 and force it if the post was empty
    if(!post) {
        return {
            notFound:true
        }
    }


    return{
        props:{
            post
        },
        revalidate: 60, // after 60 second it will update the old cached version
    }
}
const post:NextPage<Props> = ({post}) => {
    console.log(post)
    return(
        <>
            <div className="container m-auto mb-10">
                <Header/>
            </div>
            <div className="max-w-xl m-auto mb-10">
                <img src={urlFor(post.mainImage.asset._ref).url()} alt='mainImage' className="mb-10" />
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <PortableText 
                    content={post.body}
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}    
                    serializers={{
                        h1: props => <h1 className="text-2xl font-bold my-5" {...props} />,
                        h2: props => <h1 className="text-xl font-bold my-5" {...props} />,
                        li: children => <li className="ml-4 list-disc" {...children}/>,
                        link: ({href,children}) => <a href={href} className='text-blue-500 underline'>{children}</a>,
                        img: ({src}) => <img className="roudned" src={urlFor(src).url()} alt='blogImage'/>
                    }}
                />
                <form>
                    <label><span>Name</span></label>
                    <input type='text' placeholder='name' />

                    <label><span>Email</span></label>
                    <input type='email' placeholder='email' />

                    <label><span>Message</span></label>
                    <textarea></textarea>

                    <input type='submit' value='submit' />
                </form>
            </div>

        </>
    )
}


export default post