import type { NextPage } from 'next'
import Head from 'next/head'
import { sanityClient, urlFor } from '../sanity'
import {Post} from '../types'

// components
import Header from '../components/Header'
import Banner from '../components/Banner'

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
    <div className='max-w-7xl m-auto'>
      <Head>
        <title>BloggySecture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>this is the home page</h1> */}
      {/* <img src={urlFor(posts[0].mainImage.asset._ref).url()} /> */}
      {/* navigation bar  */}
      <Header />
      {/* banner  */}
      <Banner />
    </div>
  )
}

export default Home
