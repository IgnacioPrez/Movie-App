import {useState,useEffect} from 'react'
import axios from 'axios'
import { apiKey } from '../config'
import { baseURL } from '../apiURL'
import Movie from './Movie'
import Pagination from './Pagination'
import Header from './Header'

const GetMovie = () => {

    const [searchkey,setSearchkey] = useState('')
    const [actualPage,setActualPage] = useState(1)
    const [video,setVideo] = useState([])
    
    const getMovies = async (searchkey) => {
      const type = searchkey ? 'search' : 'discover'

        const {data} = await axios.get(`${baseURL}/${type}/movie/`,{
          params:{
            api_key:apiKey,
            query: searchkey,
            page:actualPage
          }
        })
        setVideo(data.results)
        console.log(data)
      }
    
      useEffect(()=> {
        getMovies()
      },[actualPage])

    const searchMovie = (e) => {
      e.preventDefault()
      getMovies(searchkey)
    }

    const previousPage = () => {
      return actualPage > 1 ? setActualPage(actualPage-1) : null
    }
    const nextPage = () => {
      setActualPage(actualPage + 1)
    }
    
    
  return (
    <>
        <Header searchMovie={searchMovie} setSearchkey={setSearchkey} />
        <Movie video={video}/>
        <Pagination previousPage={previousPage} nextPage={nextPage}/>
    </>
  )
}

export default GetMovie

