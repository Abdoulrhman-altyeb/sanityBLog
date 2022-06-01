// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


const client  = createClient(config)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.json({"name":"amanda gardian"})
}
