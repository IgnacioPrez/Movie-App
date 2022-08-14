import styled from "styled-components";

const Login = () => {
  return (
    <ContainerFormTwo>
      <FormTwo>
        <input placeholder="Name"/>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>
          Enviar
          <span></span>
        </button>
      </FormTwo>
    </ContainerFormTwo>
  );
};

export default Login;

export const ContainerFormTwo = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const FormTwo = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 20em;

  gap: 2em;
  input {
    padding: 1.3em;
    margin: 0 0.5em;
  }
  input {
    line-height: 28px;
    border: 2px solid transparent;
    border-bottom-color: #000;
    padding: 0.2rem 0;
    outline: none;
    background-color: transparent;
    color: #0d0c22;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  input:focus,
  input:hover {
    outline: none;
    padding: 0.2rem 1rem;
    border-radius: 1rem;
    border-color: #8338EC;
  }

  input::placeholder {
    color: #000;
  }

  input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }

  button {
    padding: 5em;
    margin: 0 0.5em;
  }
  button {
    border: none;
    display: block;
    position: relative;
    padding: 0.7em 2.4em;
    font-size: 18px;
    background: transparent;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    color: #8338EC;
    z-index: 1;
    font-family: inherit;
    font-weight: 500;
  }

  button span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
    border: 4px solid #8338EC;
  }

  button span::before {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    height: 500%;
    background: var(--lightgray);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.3s;
  }

  button:hover span::before {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100%;
    background: #8338EC;
  }

  button:hover {
    color: white;
  }

  button:active span::before {
    background: #8338EC;
  }
`;
