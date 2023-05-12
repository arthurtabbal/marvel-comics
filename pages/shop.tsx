import loadInitialComics, { Comics } from '@src/comics/loadInitialComics'
import InfiniteScroll from 'react-infinite-scroll-component'
import ComicsCard from '@components/ComicsCard'
import styled from 'styled-components'
import React, { useState } from 'react'
import CustomLoader from '@components/CustomLoader'
import DetailsModal from '@components/DetailsModal'

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
  const [clickedComics, setClickedComics] = useState(comics[0])
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleModalXClick() {
    setIsModalOpen(false)
  }

  function handleClickCard(comic: Comics) {
    setClickedComics(comics[comics.indexOf(comic)])
    setIsModalOpen(true)
  }

  const getMoreComics = async () => {
    const newComics = await loadInitialComics(comics.length + 20)
    setComics((comics) => [...comics, ...newComics])
  }

  return (
    <div>
      <DetailsModal
        isOpen={isModalOpen}
        comics={clickedComics}
        handleXClick={handleModalXClick}
      />
      <TitleContainer>
        <Title>Search for your favorite comics here</Title>
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
            <ComicsCard
              onClickCard={() => {
                handleClickCard(comic)
              }}
              key={comics.indexOf(comic)}
              comics={comic}
            />
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  )
}

export default ShopPage

export async function getStaticProps() {
  const initialComics = await loadInitialComics(0)
  return { props: { initialComics } }
}
