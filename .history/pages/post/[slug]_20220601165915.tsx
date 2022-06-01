import { GetStaticProps, NextPage } from "next"
import PortableText from 'react-portable-text'
import Header from "../../components/Header"
import { sanityClient,urlFor } from "../../sanity"
import { Post } from "../../types"
import { useForm,SubmitHandler } from "react-hook-form";
import { useState } from "react"


interface Props {
    post : Post
}

interface IFormInputs {
    _id:string,
    name:string,
    email:string,
    message:string
}

interface comment {
        
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
        "comments":*[
        _type == 'comment' &&
        post._ref == ^._id &&
        approved == true
        ],
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

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
    const [display,setDisplay] = useState<boolean>(false)

    const onSubmit:SubmitHandler<IFormInputs> = async(data) => {
        await fetch('/api/commentCreator',{
            method:"post",
            body:JSON.stringify(data),
        }).then(() => {
            console.log(data)
        }).catch((err) => {
            console.log(err);
        })

    };

    return(
        <article className="font-Neue">
            <div className="container m-auto mb-10">
                <Header/>
            </div>
            <section className="max-w-xl m-auto mb-10">
                <div className="flex items-center my-5">
                        <img className="w-10 h-10 rounded-full mr-5" src={urlFor(post.author.image.asset._ref).url()} alt='profile' />
                    <div className="flex-1">
                        <h1 className="font-bold ">{post.author.name}</h1>
                        <p className="text-gray-600">the post was published at <span className="text-orang">{post._createdAt}</span></p>
                    </div>
                </div>
                <div className="mb-10">
                        <h1 className="text-3xl font-bold">{post.title}</h1>
                        <p className="text-xl text-gray-600">{post.description}</p>
                </div>
                <img src={urlFor(post.mainImage.asset._ref).url()} alt='mainImage' className="mb-10" />

                <PortableText 
                    content={post.body}
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}    
                    serializers={{
                        h1: props => <h1 className="text-2xl font-bold my-5" {...props} />,
                        h2: props => <h1 className="text-xl font-bold my-5" {...props} />,
                        li: children => <li className="ml-4 list-disc" {...children}/>,
                        link: ({href,children}) => <a href={href} className='text-orang underline'>{children}</a>,
                        img: ({src}) => <img className="roudned" src={urlFor(src).url()} alt='blogImage'/>
                    }}
                />
                <hr className="w-full my-10 border border-orang"/>
               
                {!display?
                    <>
                        <div className="mb-5">
                            <h1 className="text-3xl text-orang font-semibold">Comment Section</h1>
                            <p className="indent-3 text-gray-700">Send your Feed back and love to the bloger</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col '>
                            <input 
                            type='_id' 
                            value={post._id} 
                            className="hidden" 
                            {...register('_id')}
                            />
                            <label className="block text-gray-700"><span>Name</span></label>
                            <input type='text' placeholder='name' className="block w-full outline-none ring-orange-300 hover:ring px-3 py-1 shadow-custom  mb-8" {...register("name",{required:true})} />

                            <label className="block text-gray-700"><span>Email</span></label>
                            <input type='email' placeholder='email' className="block w-full outline-none ring-orange-300 hover:ring px-3 py-1 shadow-custom mb-8" {...register("email",{required:true})}/>

                            <label className="block text-gray-700"><span>Message</span></label>
                            <textarea {...register("message",{required:true})} className="block w-full outline-none ring-orange-300 hover:ring shadow-custom mb-8" placeholder='message'></textarea>

                            {/* handel the errors here  */}
                            {errors.name && "name is required"}
                            {errors.email && "email name is required"}
                            {errors.message && "message name is required"}
                            <input type='submit' value='submit' className="bg-orange-400 w-full text-white rounded-sm py-2 cursor-pointer hover:bg-orange-300 transition duration-150 font-semibold"/>
                        </form>
                    </>
                    :
                   <div>
                       <h1>Thank you for Submitting your comment</h1>
                   </div>

                }
                 <div className="text-white font-bold bg-orang px-4 py-8">
                        <h1 className="font-bold text-2xl text-white">Comments</h1>
                        <hr className="border border-white my-2" />
                        {/* {post.comments.map((comment) => (
                            <p>{comment}</p>
                        ))} */}
                        <span className="block text-black mt-10">thank you for your comment </span>
                    </div>
                

            </section>


        </article>
    )
}


export default post