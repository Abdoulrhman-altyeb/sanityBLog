import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

const SidePost:NextPage = ({single}) => {
  console.log(single.author)
  return (
    <Link href={`/post/${single.slug.current}`}>
        <div className='flex shadow-custom justify-between cursor-pointer mb-10 p-2 overflow-hidden'>
          <div className='flex flex-col'>
            <h1 className='font-bold'>{single.title}</h1>
            <p className='tracking-tighter text-gray-500'>{single.description}</p>
            <div className=' flex'>
              <img className='h-20 w-20' src={urlFor(single.author.image.asset._ref).url()} alt='profileImage' />
              <p>{single.author.name}</p>
            </div>
          </div>
          <div>
            <img className='h-40 w-96 object-cover' src={urlFor(single.mainImage.asset._ref).url()} alt='mainImage'/>
          </div>
        </div>
    </Link>
  )
}

export default SidePost