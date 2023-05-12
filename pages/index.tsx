import { styled } from 'styled-components'
import { TypeAnimation } from 'react-type-animation'

const Container = styled.div`
  text-align: center;
`

export default function Home() {
  const sequence = [
    'Marvel Comics Store',
    1500,
    '',
    1000,
    'All your favorite heroes are here',
    1500,
    '',
    1000,
    'Shop now and enjoy!',
    4000,
  ]
  return (
    <Container>
      <h2>
        <TypeAnimation
          sequence={sequence}
          repeat={Infinity}
          speed={40}
          deletionSpeed={80}
        ></TypeAnimation>
      </h2>
    </Container>
  )
}
