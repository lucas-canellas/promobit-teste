import styled from "styled-components"
import Image from "next/image"
import blur from './../../public/images/blur.jpeg'
import Link from 'next/link'

function CardRecomendations({ recommendations }) {

  return (
    <>

      {recommendations.map(item => (
        <Link key={item.credit_id} href={`/${item.id}`} passHref>
          <Wrapper >
            <ImageNext src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`} alt="Avatar" width={176} height={264} objectFit="cover" placeholder="blur" blurDataURL={blur} />
            <Name>{item.title}</Name>
            <Character>{item.release_date}</Character>
          </Wrapper>
        </Link>
      ))
      }

    </>
  )
}

export default CardRecomendations

const Wrapper = styled.div` 
  flex: 0 0 175px;
  border-radius: 4px;
  cursor: pointer;
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

