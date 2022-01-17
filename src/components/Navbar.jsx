import styled from 'styled-components'

function Navbar() {
  return (
    <Wrapper>
      <Content>
        <BoxLogo>
          <Text>TMDB</Text>
          <Span>asd</Span>
        </BoxLogo>
      </Content>
    </Wrapper>
  )
}

export default Navbar


export const Wrapper = styled.div`
  background-color: #5C16C5;
`
export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 .5rem;
`

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Text = styled.p`
  color: #FFF;
  font-size: 31px;
  font-weight: bold;
`

export const Span = styled.div`
  width: 60px;
  height: 24px;
  border-radius: 20px;
  border: none;
  background-color: #FFF;
  color: #FFF;
`

