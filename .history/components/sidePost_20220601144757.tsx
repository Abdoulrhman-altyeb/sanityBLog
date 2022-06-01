import Link from 'next/link'
import React from 'react'

const SidePost = ({single}) => {
  console.log(single)
  return (
    <Link href={`/post/${single.slug.current}`}>
        <h1>this is a slug</h1>
    </Link>
  )
}
