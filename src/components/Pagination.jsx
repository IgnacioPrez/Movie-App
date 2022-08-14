import styled from "styled-components"

const Pagination = ({previousPage,nextPage}) => {
    
  return (
    <ContainerButton>
    <ButtonProd onClick={previousPage}>
      Página Anterior 
    </ButtonProd>
    <ButtonProd onClick={nextPage}>
      Siguiente Página
    </ButtonProd>
    </ContainerButton>
  )
}

export default Pagination


const ButtonProd = styled.button`

  font-size: 18px;
  color: #17202A;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;


:focus,:hover {
  color: #2C3E50;
}

:focus:after,
:hover:after {
  width: 100%;
  left: 0%;
}

:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #2C3E50;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
`

export const ContainerButton = styled.div`
  width: 100%;
  margin: 2em;
  display: flex;
  justify-content: space-around;
`