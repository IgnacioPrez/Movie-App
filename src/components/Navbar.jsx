import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <ContainerList>
        <li>
          <h1>React Movie App</h1>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <ContainerSesion>
            <li>
              <Link to={"/acceder"}>Iniciar sesión</Link>
            </li>
            <li>
              <Link to={"/crear"}>Registrarse</Link>
            </li>
          </ContainerSesion>
        </li>
      </ContainerList>
    </NavContainer>
  );
};

export default Navbar;

export const NavContainer = styled.nav`

  @media screen and (min-width: 320px) {
    width: 100vh;
    height: 7.5em;
    display: flex;
    flex-wrap: wrap;
    h1 {
      font-size: large;
      width: 30vh;
    }
    li > a {
      text-decoration: none;
    }
    li > a:visited {
      color: #000000;
    }
    li > a:hover {
      border-bottom: 1.5px solid black;
    }
  }
  @media screen and (min-width: 768px){
    width: 100%;
  }
`;
export const ContainerList = styled.ul`
  @media screen and (min-width: 320px) {
    display: flex;
    gap: 0.3em;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    width: 100%;

  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5em;
  }
`;

export const ContainerSesion = styled.ul`
  width: 14em;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
