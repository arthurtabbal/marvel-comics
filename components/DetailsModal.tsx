import { Comics } from '@src/comics/load-all-comics'
import Modal from 'react-modal'
import { styled } from 'styled-components'
import ComicsCard from './ComicsCard'

export interface Props {
  isOpen: boolean
  comics: Comics
  handleXClick(): void
}

const Container = styled.div`
  background-color: black;
  height: 100%;
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
const ModalStyle = {
  content: { padding: 0, borderRadius: 10 },
}

export default function DetailsModal(props: Props) {
  return (
    <Modal isOpen={props.isOpen} style={ModalStyle}>
      <Container>
        <XContainer>
          <XButton onClick={props.handleXClick}>x</XButton>
        </XContainer>
        <ComicsCard
          onClickCard={props.handleXClick}
          comics={props.comics}
        ></ComicsCard>
      </Container>
    </Modal>
  )
}
