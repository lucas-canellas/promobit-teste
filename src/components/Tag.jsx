import styled from "styled-components"
import { AiFillCloseCircle } from 'react-icons/ai'


function Tag({ name }) {
  return (
    <Wrapper>
      <Box>
        <Text>{name}</Text>
        {/* <CloseIcon /> */}
      </Box>
    </Wrapper>
  )
}

export const Wrapper = styled.button`
  /* background-color: #D18000; */
  background-color: #FFF;
  border: none;
  border-radius: 4px;
`

export const Box = styled.div`
  display: flex ;  
  gap: 10px;
  align-items: center;
  padding: 8px 16px;
`

export const Text = styled.p`
  color: #323232;
  font-weight: 700;
  font-size: 16px;  
`

export const CloseIcon = styled(AiFillCloseCircle)`
  color: #FFF;
`

export default Tag


