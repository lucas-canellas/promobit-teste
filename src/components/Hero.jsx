import styled from 'styled-components'
import Tag from './Tag'
import { useState } from "react"

function Hero({ genres, genresSearch, setGenresSearch }) {


  return (
    <Wrapper>
      <Content>
        <ContainerText>
          <Text>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Text>
        </ContainerText>
        <Label>FILTRE POR: </Label>
        <BoxTag>
          {genres.map(tag => <Tag key={tag.id} tag={tag} genresSearch={genresSearch} setGenresSearch={setGenresSearch} />)}
        </BoxTag>
      </Content>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #2D0C5E;
`
const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 85px .5rem;
  text-align: center;
`

const ContainerText = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 40px;
`

const BoxTag = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
padding-top: 1rem;
`

const Text = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #FFF;

`

const Label = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #FFF;

`

export default Hero