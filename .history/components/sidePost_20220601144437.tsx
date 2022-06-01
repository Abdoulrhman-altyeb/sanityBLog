import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

const SidePost = ({single}) => {
  console.log(single.mainImage.asset)
  return (
    <Link href={`/post/${single.slug.current}`}>

    </Link>
  )
}

export default SidePost