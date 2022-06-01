import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

const SidePost:NextPage = ({single}) => {
  console.log(single.author)
  return (
    <Link href={`/post/${single.slug.current}`}>
        <div className='flex shadow-custom justify-between cursor-pointer mb-10 p-2'>
          <div className='flex flex-col'>
            <h1 className='font-bold'>{single.title}</h1>
            <p className='tracking-tighter text-gray-500'>{single.description}</p>
            <div className='h-20 w-20'>
              <img src={urlFor(single.author.image.asset._ref).url()} alt='profileImage' />
              <p>{single.author.name}</p>
            </div>
          </div>
          <div className='h-20 w-96'>
            <img src={urlFor(single.mainImage.asset._ref).url()} alt='mainImage'/>
          </div>
        </div>
    </Link>
  )
}

export default SidePost