import styled from 'styled-components'
import Image from 'next/image'
import blur from './../../public/images/blur.jpeg'


function CardMovie({ movies, genresSearch }) {

  return (
    <>
      {movies.map(movie => (
        genresSearch.length == 0 ?
          <BoxCard key={movie.id}>
            <ImageNext src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Poster do filme" width={176} height={264} objectFit="cover" placeholder="blur" blurDataURL={blur} />
            <Title>{movie.title}</Title>
            <Data>{movie.release_date}</Data>
          </BoxCard>
          :
          (movie.genre_ids.some(r => genresSearch.includes(r)) &&
            <BoxCard key={movie.id}>
              <ImageNext src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Poster do filme" width={176} height={264} objectFit="cover" placeholder="blur" blurDataURL={blur} />
              <Title>{movie.title}</Title>
              <Data>{movie.release_date}</Data>
            </BoxCard>)
      ))}
    </>
  )
}

export default CardMovie

export const BoxCard = styled.div`
  width: 176px;
  height: 320px;
`
export const ImageNext = styled(Image)`
  border-radius: 4px;
  border: 1px solid #E7E7E7;
`

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`

export const Data = styled.div`
  color: #646464;
  font-size: 14px;
  font-weight: 700;
`