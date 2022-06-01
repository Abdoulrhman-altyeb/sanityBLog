import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { sanityClient, urlFor } from '../sanity'
import {Post} from '../types'

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
    <div >
      <Head>
        <title>BloggySecture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='dark:bg-blue-300'>this is the home page</h1>
      {/* <img src={urlFor(posts[0].mainImage.asset._ref).url()} /> */}
    </div>
  )
}

export default Home