import { styled } from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
  position: absolute;
  top: 2rem;
  left: -1rem;
  transform: rotate(-30deg);
`
const RareH2 = styled.h2`
  position: absolute;
  top: 1rem;
  left: 2rem;
  color: #333300;
  font-family: 'vina sans', sans-serif;
  font-weight: 100;
`
export default function RareSticker() {
  return (
    <Container>
      <Image
        style={{ position: 'absolute' }}
        alt="Rare"
        src="https://www.onlygfx.com/wp-content/uploads/2017/03/x-blank-sticker-yellow.png"
        width={100}
        height={100}
      />
      <RareH2>RARE ITEM!</RareH2>
    </Container>
  )
}
