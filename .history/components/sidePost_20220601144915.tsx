import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const SidePost:NextPage = ({single}) => {
  console.log(single)
  return (
    <Link href={`/post/${single.slug.current}`}>
        <h1>this is a slug</h1>
    </Link>
  )
}

export default SidePost