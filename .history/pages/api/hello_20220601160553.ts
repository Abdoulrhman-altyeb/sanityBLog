// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from "next-sanity";

type Data = {
  name: string
}

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID , // you can find this in sanity.json
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // or the name you chose in step 1
    useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
    aapiVersion: '2021-10-21',
}

const client  = createClient(config)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const{id,name,email,message} = req.body

  try{  
    await client.create({
      _type:"comment",
      post:{
        _type:'reference',
        _ref:id
      },
      message,
      email,
      name
    })

  }catch(err) {
    return res.status(500).json(err)
  }

  return res.status(200).json('successfully submitted')
}
