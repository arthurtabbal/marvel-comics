import { PulseLoader } from 'react-spinners'
import { styled } from 'styled-components'

const Container = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function CustomLoader() {
  return (
    <Container>
      <PulseLoader color="white" loading={true} />
    </Container>
  )
}
