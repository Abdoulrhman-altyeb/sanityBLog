import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

const SidePost:NextPage = ({single}) => {
  console.log(single.author.image.asset)
  return (
    <Link href={`/post/${single.slug.current}`}>
        <div>
          <div>
            <h1>{single.title}</h1>
            <p>{single.description}</p>
            <div>
              <img src={urlFor(single.author.image.asset._ref).url()} alt='profileImage' />
              <p>{single.author.name}</p>
            </div>
          </div>
          <div>
            <img src={urlFor(single.mainImage.asset._ref).url()} alt='mainImage'/>
          </div>
        </div>
    </Link>
  )
}

export default SidePost