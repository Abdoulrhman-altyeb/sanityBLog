import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../types'

const SidePost:NextPage = (Props:Post) => {
  return (
    <Link href={`/post/${single.slug.current}`}>
        <div className='flex shadow-custom justify-between cursor-pointer mb-10 p-2 overflow-hidden group'>
          <div className='flex flex-col justify-between w-3/4'>
            <h1 className='font-bold text-xl'>{single.title}</h1>
            <p className='tracking-tighter text-gray-500 hidden md:block w-3/4'>every blog should had at least a description for the user to know what the blog is talking about. The Description Of This Blog Is {single.description}</p>
            <div className='flex items-center '>
              <img className='w-7 h-7 sm:w-12 sm:h-12 rounded-full mr-4 object-cover' src={urlFor(single.author.image.asset._ref).url()} alt='profileImage' />
              <p>{single.author.name}</p>
            </div>
          </div>
          <div className='overflow-hidden md:w-96 w-20'>
            <img className='h-20 w-20 md:h-40 md:w-96 object-cover group-hover:scale-105 transition-transform duration-150' src={urlFor(single.mainImage.asset._ref).url()} alt='mainImage'/>
          </div>
        </div>
    </Link>
  )
}

export default SidePost