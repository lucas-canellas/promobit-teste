import Image from 'next/image'
import styled from 'styled-components'
import blur from './../../public/images/blur.jpeg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { parse } from 'fecha';

function HeroMovie({ movie, cast, crew }) {
  const percentage = movie.vote_average * 10;

  return (
    <>
      {movie && (
        <Wrapper>
          <Container>
            <BoxImage>
              <ImageNext src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} width={383} height={574} alt="Poster do filme" objectFit="cover" placeholder="blur" blurDataURL={blur} />
            </BoxImage>
            <InfoBox>
              <Title>{movie.title}</Title>
              {/* <Subtitle>16 anos  • 11/02/2016 (BR)  •  Ação, Aventura, Comédia, Ficção científica • 1h 47m</Subtitle> */}
              <Assessment>
                <div style={{ width: 60, height: 60 }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    background
                    backgroundPadding={0}
                    strokeWidth={10}
                    styles={buildStyles({
                      backgroundColor: "#42246D",
                      textColor: "#14FF00",
                      pathColor: "#14FF00",
                      trailColor: "transparent",
                      strokeLinecap: 'round',
                      textSize: "20px"
                    })}
                  />
                </div>
                <AssessmentText>
                  Avaliação dos <br /> usuários
                </AssessmentText>
              </Assessment>

              <TitleSinopse>Sinopse</TitleSinopse>
              <Sinopse>{movie.overview}</Sinopse>
              <BoxCast>
                {crew.map(item => (
                  item.job == 'Director' || item.job == 'Screenplay' || item.job == 'Characters' ?
                    (
                      <BoxCrew key={item.credit_id}>
                        <NameCrew>{item.name}</NameCrew>
                        <JobCrew>{item.job}</JobCrew>
                      </BoxCrew>
                    )
                    :
                    ''
                ))}
              </BoxCast>
            </InfoBox>
          </Container>
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  background-color: #2D0C5E;
`

const Assessment = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
 margin-bottom: 32px;
`

const BoxCast = styled.div`
 display: flex;
 flex-wrap: wrap;
`

const BoxCrew = styled.div`
margin-right: 120px;
margin-bottom: 32px;
`

const AssessmentText = styled.p`
color: #FFF;
`

const NameCrew = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`

const JobCrew = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
`

const Container = styled.div`
  display: flex;
  max-width: 1220px;
  margin: 0 auto;  
  gap: 30px;
  padding: 0 1rem;

 @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center ;
  }

`

const BoxImage = styled.div`
  position: relative;
  top: 45px;
`
const ImageNext = styled(Image)`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
`

const InfoBox = styled.div`
  padding-top: 45px;
  max-width: 720px;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #FFF;
  margin-bottom: 8px;
`

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #FFF;
  margin-bottom: 16px;
`

const TitleSinopse = styled.h1` 
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  margin-bottom: 8px;
`

const Sinopse = styled.p`
 
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.005em;
  color: #DDDDDD;
  margin-bottom: 24px;
`


export default HeroMovie

