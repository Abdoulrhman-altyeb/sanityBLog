import type { NextPage } from 'next'
import Head from 'next/head'
import { sanityClient, urlFor } from '../sanity'
import {Post} from '../types'

// components
import Header from '../components/Header'
import Banner from '../components/Banner'
import SinglePost from '../components/Post'
import Link from 'next/link'

interface Posts {
  posts : [Post]
}

export const getServerSideProps = async() => {
  const query = `*[_type=="post"] { 
    _id,
    title,
    slug,
    author -> {
      name,image
    },
    mainImage,
    description,
  }`

  const posts = await sanityClient.fetch(query);

  return{
    props:{
      posts
    }
  }
}

const Home:NextPage<Posts> = ({posts}) => {
  console.log(posts)
  return (
    <div className='container px-2 sm:px-0 m-auto'>
      <Head>
        <title>BloggySecture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      {/* navigation bar  */}
      <Header />
      {/* banner  */}
      <Banner />
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
        {posts.map((single) => {
            return(
              <>
                <Link href={'http://localhost:3000/post/'+single.slug.current}>
                  <SinglePost key={single._id} single={single}/>
                </Link>
              </>
              )
            })}
      </div>

    </div>
  )
}

export default Home
