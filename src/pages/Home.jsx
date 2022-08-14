import GetMovie from "../components/GetMovie"
import styled from "styled-components"
const Home = () => {

  return (
    <Container>
        <GetMovie/>     
    </Container>
  )
}

export default Home


export const Container = styled.div`
  @media screen and (min-width: 320px) {
    width: 100vh;   
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`