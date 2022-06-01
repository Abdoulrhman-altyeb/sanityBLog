import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

const SidePost:NextPage = ({single}) => {
  console.log(single.author)
  return (
    <Link href={`/post/${single.slug.current}`}>
        <div className='flex shadow-custom justify-between cursor-pointer mb-10 p-2 overflow-hidden group'>
          <div className='flex flex-col justify-center md:justify-between'>
            <h1 className='font-bold text-xl'>{single.title}</h1>
            <p className='tracking-tighter text-gray-500 hidden md:block'>The Description Of This Blog Is {single.description}</p>
            <div className='flex items-center '>
              <img className='w-7 h-7 sm:w-12 sm:h-12 rounded-full mr-4 object-cover' src={urlFor(single.author.image.asset._ref).url()} alt='profileImage' />
              <p>{single.author.name}</p>
            </div>
          </div>
          <div className='overflow-hidden'>
            <img className='h-40 max-w-3xl object-cover group-hover:scale-105 transition-transform duration-150' src={urlFor(single.mainImage.asset._ref).url()} alt='mainImage'/>
          </div>
        </div>
    </Link>
  )
}

export default SidePost