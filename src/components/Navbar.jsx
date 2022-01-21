import styled from 'styled-components'
import Link from 'next/link'

function Navbar() {
  return (
    <Wrapper>
      <Content>
        <Link href={`/`} passHref>
          <Text>TMDB</Text>
        </Link>
      </Content>
    </Wrapper>
  )
}

export default Navbar


const Wrapper = styled.div`
  background-color: #5C16C5;
`
const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 .5rem;
`

const Text = styled.p`
  color: #FFF;
  font-size: 31px;
  font-weight: bold;

    &:after {
    content: "";
    margin-left: 10px;
    display: inline-block;
    width: 55px;
    height: 22px;
    border-radius: 20px;
    background-color: #FFF;
  }
`

export const Span = styled.div`
  width: 60px;
  height: 24px;
  border-radius: 20px;
  border: none;
  background-color: #FFF;
  color: #FFF;
`

