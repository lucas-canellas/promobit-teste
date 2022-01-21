import styled from "styled-components"
import Image from "next/image"
import blur from './../../public/images/blur.jpeg'

function CardCast({ cast }) {



  return (
    <>

      {cast.map(item => (
        <Wrapper key={item.credit_id}>
          <ImageNext src={`https://image.tmdb.org/t/p/w185/${item.profile_path}`} alt="Avatar" width={175} height={221} objectFit="cover" placeholder="blur" blurDataURL={blur} />
          <Name>{item.name}</Name>
          <Character>{item.character}</Character>
        </Wrapper>
      ))}

    </>
  )
}

export default CardCast

const Wrapper = styled.div` 
  flex: 0 0 175px;
  padding: 8px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`
const ImageNext = styled(Image)`
  border-radius: 4px;
`
const Name = styled.p`
  color: #131313;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
`
const Character = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #131313;
`

