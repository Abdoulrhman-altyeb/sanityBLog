import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

const SidePost = ({single}) => {
  return (
    <Link href={`/post/${single.slug.current}`}>
      <div>
        <h1>this is lit</h1>
      </div>
    </Link>
  )
}

export default SidePost