import type { NextApiRequest, NextApiResponse } from 'next'
import coupons from './mock-coupons.json'

type Coupons = {
  code: string
  type: string
  discount: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Coupons[]>,
) {
  res.status(200).json(coupons)
}
