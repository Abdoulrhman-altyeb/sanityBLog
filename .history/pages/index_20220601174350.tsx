import type { NextPage } from 'next'
import Head from 'next/head'
import { sanityClient, urlFor } from '../sanity'
import {Post} from '../types'

// components
import Header from '../components/Header'
import Banner from '../components/Banner'
import SinglePost from '../components/Post'
import SidePost from '../components/SidePost'

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
    <main className='container px-2 sm:px-0 m-auto font-Neue'>
      <Head>
        <title>BloggySecture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      {/* navigation bar  */}
      <Header />
      {/* banner  */}
      <Banner />
      <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
        {posts.map((single:Post) => (
            <SinglePost single={single} key={single._id}/>
        ))}
      </section>

      <h1 className='mb-10 border-b-4 border-orang w-fit font-bold text-2xl'>More Blogs</h1>
      <div>
        {posts.map((single) => (
            <SidePost single={single} key={single._id}/>
        ))}
      </div>

    </main>
  )
}

export default Home
