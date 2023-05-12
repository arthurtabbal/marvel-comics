import { Comics } from '@src/comics/loadInitialComics'
import Image from 'next/image'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addToCart } from 'redux/cart.slice'
import RareSticker from './RareSticker'
import cogoToast from 'cogo-toast'

const WIDTH = 220

const Container = styled.div`
  position: relative;
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
  onClickCard(): void
}

const ComicsCard: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const { comics } = props
  return (
    <Container>
      {comics.rare ? <RareSticker /> : ''}
      <Image
        style={{ cursor: 'pointer' }}
        alt="Comics Cover Image"
        src={
          comics.thumbnail
            ? `${comics.thumbnail.path}.${comics.thumbnail.extension}`
            : ''
        }
        height={300}
        width={WIDTH}
        onClick={props.onClickCard}
      />
      <Title>{comics.title}</Title>
      <p>R$ {comics.prices[0].price}</p>
      <Button
        onClick={() => {
          dispatch(addToCart(comics))
          cogoToast.success('Added to Cart')
        }}
      >
        Add to Cart
      </Button>
    </Container>
  )
}

export default ComicsCard
