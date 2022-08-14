import {useState} from "react";
import styled from "styled-components";
import { imageBaseURL } from "../apiURL";

const Movie = ({video}) => {
    const [view, setView] = useState(false)

  return (
    <ContainerMovie onClick={()=>{setView(!view)}}>
      {video.map((movie) => 
        <CardPoster key={movie.id}>
            <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </CardPoster>)}
      </ContainerMovie>

  );
};

export default Movie;

export const ContainerMovie = styled.main`

  @media screen and (min-width: 320px) {
    margin-top:5em;
    width: 100vh;
    display: flex;
    flex-wrap: wrap;
    gap: 3em;
}
@media screen and (min-width: 768px){
    margin-top:2em;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
`
export const CardPoster = styled.section`
  @media screen and (min-width: 320px) {
    width: 10em;
    margin-left: 0.4em;
    box-shadow: 0 1px 25px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      transition: all 1.5s ease-in-out;
    }
    img {
      max-width: 100%;
      border-radius: 8px;
    }
  }
  @media screen and (min-width: 768px) {
    img {
      width: 16em;
      margin-left: 1em;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
  }
`;
