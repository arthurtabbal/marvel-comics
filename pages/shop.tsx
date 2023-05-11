import loadAllComics, { Comics } from '@src/comics/load-all-comics'

import ComicsCard from '@components/ComicsCard'
import styled from 'styled-components'

interface Props {
  comics: Comics[]
}

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
  const { comics } = props
  return (
    <div>
      <Title>All Comics</Title>
      <Grid>
        {comics.map((comic) => (
          <ComicsCard key={comic.id} comics={comic} />
        ))}
      </Grid>
    </div>
  )
}

export default ShopPage

export async function getStaticProps() {
  const comics = await loadAllComics()
  return { props: { comics } }
}
