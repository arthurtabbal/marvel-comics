import crypto from 'crypto-js'

export interface Comics {
  id: number
  digitalId: number
  title: string
  description: string
  pageCount: number
  prices: Price[]
  thumbnail: ImageSrc
  quantity: number
  rare: boolean
  series: Series
}

export interface Price {
  type: string
  price: number
}

export interface ImageSrc {
  path: string
  extension: string
}

export interface Series {
  name: string
}

export default async function loadComics(length: number) {
  const offset = length ? length : 0
  const ts = new Date().getTime()
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY
  const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY
  const hash = crypto
    .MD5(`${ts}${privateKey}${publicKey}`)
    .toString(crypto.enc.Hex)
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=20&offset=${
      1000 + offset
    }`,
  )
  const result = await response.json()
  const { data } = result
  return data.results
    .filter((comics: Comics) => {
      return comics.thumbnail && comics.prices[0].price > 0
    })
    .map((comics: Comics) => {
      return { ...comics, rare: Math.random() > 0.1 ? false : true }
    })
}
