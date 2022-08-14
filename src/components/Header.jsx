import styled from 'styled-components'
import {GoSearch} from 'react-icons/go'

const Header = ({searchMovie,setSearchkey}) => {
  return (
    <ContainerFilter>
    <ContainerList>
      <LogoContainer onSubmit={searchMovie}>
        <GoSearch/>
        <input type='text' name='search' placeholder='Search' onChange={(e)=> setSearchkey(e.target.value)}/>
      </LogoContainer>
      <li>Género</li>
      <li>Pelicula</li>
      <li>TV</li>
    </ContainerList>
  </ContainerFilter>
  )
}

export default Header


export const ContainerFilter = styled.header`
  @media screen and (min-width: 320px) {
    width: 100vh;
    display: flex;
    border-top: 0.1em #E3E4E5 solid ;
    
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-top:2em;
    height: 20%;
    margin-bottom: 5em;
    box-shadow: 0 1px 17px rgba(0,0,0,0.2);

  }


`
export const LogoContainer = styled.form`

  @media screen and (min-width: 320px) {
    width: 10em;
    height: auto;
    display: flex;
    align-items: center;  
    line-height: 1.5em;
    align-items: center;
    position: relative;
  input{
    width: 100%;
    padding: 0.3em;
    width: 100%;
    line-height: 1.5em;
    /* padding: 0 1rem; */
    padding: 0.3em 1.5em;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: .3s ease;
  }
  input::placeholder{
    color: #9e9ea7;
  }
  input:focus, input:hover {
    outline: none;
    border-color: rgba(234,76,137,0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }
  svg{
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.5rem;
    position: absolute;
    left: 1rem;
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
  }
  }
  @media screen and (min-width: 768px) {
    input{
      padding: 0.5em 2em;
      line-height: 2em;
      width: 15em;
    }
    svg{
    margin-right: 2em;
    left: 0.5em;

    }
  }
`
export const ContainerList = styled.ul`

  @media screen and (min-width: 320px) {
    width: 100%;
    display: flex;
    gap: 1em;
    align-items: center;
    li{
    list-style: none;
    cursor: pointer;
    }
  }
  @media screen and (min-width: 768px){
    gap: 0;
    display: flex;
    justify-content: space-around;
  }
`
