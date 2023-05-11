import crypto from 'crypto-js'

export interface Price {
  type: string
  price: number
}

export interface ImageSrc {
  path: string
  extension: string
}

export interface Comics {
  id: number
  digitalId: number
  title: string
  description: string
  pageCount: number
  prices: Price[]
  images: ImageSrc[]
}

export default async function loadAllComics() {
  const ts = new Date().getTime()
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY
  const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY
  const hash = crypto
    .MD5(`${ts}${privateKey}${publicKey}`)
    .toString(crypto.enc.Hex)
  const response = await fetch(
    `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=10&offset=1000`,
  )
  const result = await response.json()
  const { data } = result
  return data.results
}
