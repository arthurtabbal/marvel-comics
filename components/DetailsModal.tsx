import { Comics } from '@src/comics/loadInitialComics'
import Modal from 'react-modal'
import { styled } from 'styled-components'
import Image from 'next/image'
import RareSticker from './RareSticker'

export interface Props {
  isOpen: boolean
  comics: Comics
  handleXClick(): void
}

const Container = styled.div`
  background-color: black;
  height: 100%;
  font-family: serif;
  font-weight: 100;
`

const XButton = styled.button`
  margin: 0.5rem;
  height: 20px;
  width: 20px;
  color: white;
  background-color: black;
`
const XContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Title = styled.div`
  text-align: center;
`
const DetailsContainer = styled.div`
  margin-top: 5rem;
  margin-left: 10rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
`

const TextDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 40%;
  margin-bottom: 100px;
`
const RareContainer = styled.div`
  position: relative;
`

const ModalStyle = {
  content: { padding: 0, borderRadius: 10, overflow: 'hidden' },
}

export default function DetailsModal(props: Props) {
  return (
    <Modal isOpen={props.isOpen} style={ModalStyle}>
      <Container>
        <XContainer>
          <XButton onClick={props.handleXClick}>x</XButton>
        </XContainer>
        <Title>
          <h2>{props.comics.title}</h2>
        </Title>
        <DetailsContainer>
          <Image
            alt="Comics Cover"
            src={`${props.comics.thumbnail.path}.${props.comics.thumbnail.extension}`}
            width={220}
            height={300}
          />
          <TextDetails>
            <p>
              <strong>Description: </strong>
              {props.comics.description ? props.comics.description : ' --- '}
            </p>
            <p>
              <strong>Series: </strong>
              {props.comics.series.name}
            </p>
            <p>
              <strong>Number of Pages: </strong>
              {props.comics.pageCount}
            </p>
            <p>
              <strong>Price</strong>: R$ {props.comics.prices[0].price}
            </p>
            <RareContainer>
              {props.comics.rare ? <RareSticker /> : ''}
            </RareContainer>
          </TextDetails>
        </DetailsContainer>
      </Container>
    </Modal>
  )
}
