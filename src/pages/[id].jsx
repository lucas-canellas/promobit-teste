import api from "./api/api"
import Navbar from '../components/Navbar'
import HeroMovie from '../components/HeroMovie'
import CardCast from "../components/CardCast"
import styled from 'styled-components'
import YouTube from 'react-youtube';
import CardRecomendations from "../components/CardRecomendations"
import { useMediaQuery } from 'react-responsive'



export default function Id({ movie, cast, crew, videos, recommendations, apiKey }) {
  const video = videos.map(item => item.key)
  const mobile = useMediaQuery({ query: '(max-width: 640px)' })

  const opts = {
    height: mobile ? '180' : '360',
    width: mobile ? '310' : '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      <Navbar />
      <HeroMovie movie={movie} cast={cast} crew={crew} />
      <Wrapper>
        <Title>Elenco original{JSON.stringify(apiKey)}</Title>
        <BoxCardCast>
          <CardCast cast={cast} />
        </BoxCardCast>
        <Title>Trailer</Title>
        {!!video && <YouTube opts={opts} key={video[0]} videoId={video[0]} />}
        <Title>Recomendações</Title>
        <BoxCardRecomendations>
          <CardRecomendations recommendations={recommendations} />
        </BoxCardRecomendations>



      </Wrapper>

    </>
  )
}


export async function getServerSideProps(context) {

  const { id } = context.params;
  const movie = await api.get(`/movie/${id}`).then(response => response.data)
  const crew = await api.get(`/movie/${id}/credits`).then(response => response.data.crew)
  const cast = await api.get(`/movie/${id}/credits`).then(response => response.data.cast)
  const videos = await api.get(`/movie/${id}/videos`).then(response => response.data.results)
  const recommendations = await api.get(`/movie/${id}/recommendations`).then(response => response.data.results)


  return {
    props: { movie, crew, cast, videos, recommendations, apiKey: process.env.API_KEY },
  }
}

const BoxCardRecomendations = styled.div`
  display: flex;
    overflow-x: auto;
  gap: 32px;
  margin-bottom: 400px;

    ::-webkit-scrollbar-track {
    background: #DDDDDD;
    border-radius: 100px;
}
::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
    background: #ADADAD;
border-radius: 100px;
}
`

const BoxCardCast = styled.div`
  display: flex;  
  overflow-x: auto;
  gap: 16px;
  padding: 12px 0;

  ::-webkit-scrollbar-track {
    background: #DDDDDD;
    border-radius: 100px;
}
::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
    background: #ADADAD;
border-radius: 100px;
}


`

const Title = styled.h1`
  font-size: 32px;
  line-height: 24px;
  color: #131313;
  margin-bottom: 24px;
  margin-top: 40px;
`

const Wrapper = styled.div`
    max-width: 1220px;
  margin: 0 auto;
  padding-top: 60px;
  padding-left: 1rem;
  padding-right: 1rem;
`
