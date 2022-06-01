import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

const SidePost:NextPage = ({single}) => {
  console.log(single.mainImage.asset._ref)
  return (
    <Link href={`/post/${single.slug.current}`}>
        <div>
          <div>
            
          </div>
          <div>
            <img src={urlFor(single.mainImage.asset._ref).url()} alt='mainImage'/>
          </div>
        </div>
    </Link>
  )
}

export default SidePost