import api from "./api/api";
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import CardMovie from "../components/CardMovie";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'
import Head from 'next/head'

export default function Home(props) {

  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [genresSearch, setGenresSearch] = useState([])

  const mobile = useMediaQuery({ query: '(max-width: 480px)' })

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    const getMovies = async () => {
      const movies = await api.get('/movie/popular', { params: { page: `${page}` } }).then(response => response.data.results)
      setMovies(movies)
    }
    getMovies()

  }, [page])

  return (
    <>
      <Head>
        <title>TMDB - Desafio fontend do Promobit, retirado de github.com/felipefialho/frontend-challenges </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <Navbar />
      <Hero genres={props.data} genresSearch={genresSearch} setGenresSearch={setGenresSearch} />
      <Wrapper>
        <ContainerCards >
          <CardMovie movies={movies} genresSearch={genresSearch} />
        </ContainerCards>
        <Paginate
          previousLabel={mobile ? '<' : 'anterior'}
          nextLabel={mobile ? '>' : 'próxima'}
          breakLabel={"..."}
          pageCount={500}
          marginPagesDisplayed={mobile ? 1 : 2}
          pageRangeDisplayed={mobile ? 1 : 3}
          onPageChange={handlePageClick}
        />
      </Wrapper>
    </>
  )
}

export const Paginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0 5rem;
  li a {
    padding: 0.1rem 1rem;
    cursor: pointer;
    color: #5C16C5;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #5C16C5;
    border-radius: 10px;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: gray;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding-top: 1.8rem;
  padding-bottom: 80px;

  
`

const Wrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 50px;
  
  
`

export async function getServerSideProps() {

  const data = await api.get('/genre/movie/list').then(response => response.data.genres)

  return {
    props: { data },
  }
}