import loadAllComics, { Comics } from '@src/comics/load-all-comics'
import InfiniteScroll from 'react-infinite-scroll-component'
import ComicsCard from '@components/ComicsCard'
import styled from 'styled-components'
import React, { Suspense, useState } from 'react'
import loadConfig from 'next/dist/server/config'
import { PulseLoader } from 'react-spinners'
import CustomLoader from '@components/CustomLoader'

interface Props {
  initialComics: Comics[]
}

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`

const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  margin: 0 1rem 1rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem 0.5rem;
  place-items: center;
`

const ShopPage: React.FC<Props> = (props) => {
  const { initialComics } = props

  const [comics, setComics] = useState(initialComics)
  const [hasMore, setHasMore] = useState(true)

  const getMoreComics = async () => {
    const newComics = await loadAllComics(comics.length + 20)
    setComics((comics) => [...comics, ...newComics])
  }

  return (
    <div>
      <TitleContainer>
        <Title>Search for your favorite comics</Title>
      </TitleContainer>
      <InfiniteScroll
        dataLength={comics.length}
        next={getMoreComics}
        hasMore={hasMore}
        loader={<CustomLoader />}
        endMessage={<h4>That`s all, folks!</h4>}
      >
        <Grid>
          {comics.map((comic) => (
            <ComicsCard key={comics.indexOf(comic)} comics={comic} />
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  )
}

export default ShopPage

export async function getStaticProps() {
  const initialComics = await loadAllComics(0)
  return { props: { initialComics } }
}
