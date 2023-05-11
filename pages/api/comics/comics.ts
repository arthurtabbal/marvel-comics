import loadAllComics, { Comic } from '@src/comics/load-all-comics'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comic[]>,
) {
  const comics = await loadAllComics()
  res.status(200).json([])
}