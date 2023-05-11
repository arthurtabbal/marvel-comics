import { Comics } from '@src/comics/load-all-comics'
import Image from 'next/image'
import styled from 'styled-components'

const WIDTH = 220

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${WIDTH}px;
`

const Title = styled.h4`
  font-size: 1rem;
`
const Button = styled.button`
  color: white;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0;
  background: transparent;
  text-transform: uppercase;
  border: 2px solid white;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
`

export interface Props {
  comics: Comics
}

const ComicsCard: React.FC<Props> = (props) => {
  const { comics } = props
  return (
    <Container>
      <Image
        alt="Comics Cover Image"
        src={`${comics.images[0].path}.${comics.images[0].extension}`}
        height={300}
        width={WIDTH}
      />
      <Title>{comics.title}</Title>
      <p>R$ {comics.prices[0].price}</p>
      <Button>Add to Cart</Button>
    </Container>
  )
}

export default ComicsCard
