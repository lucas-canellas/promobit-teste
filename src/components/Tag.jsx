import styled from "styled-components"
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react";



function Tag({ tag, genresSearch, setGenresSearch }) {

  const [bg, setBg] = useState("#FFFFFF")
  const [textColor, setTextColor] = useState("#323232")

  const toogleTag = () => {
    bg === "#FFFFFF" ? setBg("#D18000") : setBg("#FFFFFF")
    textColor === "#323232" ? setTextColor("#FFFFFF") : setTextColor("#323232")
  }

  const removeItem = (id) => {
    const newList = genresSearch.filter(item => item !== id)
    setGenresSearch(newList)
    toogleTag()

  }

  const addItem = (id) => {
    setGenresSearch(genresSearch => [...genresSearch, id])
    toogleTag()

  }

  const getId = () => {
    { genresSearch.includes(tag.id) ? removeItem(tag.id) : addItem(tag.id) }
  }
  return (
    <Wrapper bg={bg} onClick={() => getId()}>
      <Box>
        <Text textColor={textColor}>{tag.name}</Text>
        {bg == "#D18000" && <CloseIcon />}
      </Box>
    </Wrapper >
  )
}

export const Wrapper = styled.button`
  /* background-color: #D18000; */
  background-color: ${props => props.bg};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const Box = styled.div`
  display: flex ;  
  gap: 10px;
  align-items: center;
  padding: 8px 16px;
`

export const Text = styled.p`
  color: ${props => props.textColor};
  font-weight: 700;
  font-size: 16px;  
`

export const CloseIcon = styled(AiFillCloseCircle)`
  color: #FFF;
`

export default Tag


