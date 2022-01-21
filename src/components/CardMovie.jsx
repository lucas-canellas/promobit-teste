import styled from 'styled-components'
import Image from 'next/image'
import blur from './../../public/images/blur.jpeg'
import Link from 'next/link'



function CardMovie({ movies, genresSearch }) {



  return (
    <>
      {movies.map(movie => (
        genresSearch.length == 0 ?
          (<Link href={`/${movie.id}`} passHref>
            <BoxCard key={movie.id} >
              <ImageNext src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Poster do filme" width={176} height={264} objectFit="cover" placeholder="blur" blurDataURL={blur} />
              <Title>{movie.title}</Title>
              <Data>{movie.release_date}</Data>
            </BoxCard>
          </Link>)
          :
          (movie.genre_ids.some(r => genresSearch.includes(r)) &&
            <Link href={`/${movie.id}`} passHref>
              <BoxCard key={movie.id}>
                <ImageNext src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Poster do filme" width={176} height={264} objectFit="cover" placeholder="blur" blurDataURL={blur} />
                <Title>{movie.title}</Title>
                <Data>{movie.release_date}</Data>
              </BoxCard>
            </Link>)
      ))}
    </>
  )
}

export default CardMovie

const BoxCard = styled.div`
  width: 176px;
  height: 320px;
  cursor: pointer;
`
const ImageNext = styled(Image)`
  border-radius: 4px;
  border: 1px solid #E7E7E7;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`

const Data = styled.div`
  color: #646464;
  font-size: 14px;
  font-weight: 700;
`