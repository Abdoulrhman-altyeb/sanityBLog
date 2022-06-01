import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

const SidePost = ({single}) => {
  return (
    <Link href={`/post/${single.slug.current}`}>
      <div>
        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
        <div>
          <img src={urlFor(single.mainImage.asset._ref).url()} alt='mainImage' />
        </div>
      </div>
    </Link>
  )
}

export default SidePost