import { useContext } from "react";
import styled from "styled-components";
import { imageBaseURL } from "../apiURL";
import { movieContext } from "../context/movieContext";

const Modal = ({setSelectedMovie,setView,view,selectedMovie}) => {
    const {video} = useContext(movieContext)
    return (
    <>
        <Overlay onClick={()=> {setView(!view)}} >
            <ContenedorModal onClick={()=>{setSelectedMovie(video)}}>
                <img src={`${imageBaseURL}${selectedMovie.backdrop_path}`} alt={selectedMovie.title}/>
                    <h1>{selectedMovie.title}</h1>
                    <p>{selectedMovie.overview}</p>
            </ContenedorModal>
        </Overlay>
    </>
  )
}

export default Modal

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ContenedorModal = styled.div`
    width: 50%;
    height: auto;
    border: solid 2px blue;
    min-height: 100px;
    background: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    position: relative;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
`

