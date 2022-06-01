import Link from 'next/link'
import React from 'react'

const SidePost = ({single}) => {
  return (
    <Link href={`/post/${single.slug.current}`}>
    </Link>
  )
}

export default SidePost