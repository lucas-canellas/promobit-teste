import api from "../services/api";
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import CardMovie from "../components/CardMovie";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

export default function Home(props) {

  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])

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
      <Navbar />
      <Hero genres={props.data} />
      <ContainerCards>
        <CardMovie movies={movies} />
      </ContainerCards>
      <Paginate
        previousLabel={"anterior"}
        nextLabel={"próxima"}
        breakLabel={"..."}
        pageCount={500}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
      />
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
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: #2d0b61;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`
export const ContainerCards = styled.div`
  max-width: 1220px;
  margin: 0 auto;  
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 1.8rem;
`

export async function getServerSideProps({ page }) {

  const data = await api.get('/genre/movie/list').then(response => response.data.genres)

  return {
    props: { data },
  }
}