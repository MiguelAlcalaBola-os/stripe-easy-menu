import React from 'react'
import styled from 'styled-components'
function Banner() {
  return (
    <div className="padre">
      <div className="container">
        <Container>
          <Texts>
            <h1 className="green">
            Nuestras Plantillas de menú 
            </h1>

            <p>
            Seleccione un modelo de menú, rellénelo en líneas y expórtelo en PDF en solo algunos minutos.
            </p>
       
            <p>
            ¿El modelo seleccionado no le gusta lo suficiente? Adáptelo o seleccione otro en un solo click!.
            </p>

            {/* 
   <button onClick={() => signInWithGithub()}>SuscribirmeGitHub</button> */}
            

            {/*
 
    <Social>
        <p>Nuestras redes</p>
        <div className='social-icons'>
            <span><a href='#'><SiFacebook/></a></span>
            <span><a href='#'><SiFacebook/></a></span>
        </div>
    </Social> 
    */}
          </Texts>

          <Profile>
            <img src="https://i.ibb.co/GpsTw8J/EASY-MENU-plant.png"></img>
          </Profile>
        </Container>
        <br />
        <br />
      </div>
    </div>
  )
}

export default Banner

const Container = styled.div`
  font-family: "Secular One", sans-serif;
  display: flex;
  gap: 2rem;

  width: 90%; 
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
margin-top: 4rem;
  h4 {
    padding: 1rem 0;

    font-weight: 500;
    font-family: "Secular One", sans-serif;
  }
  h1 {
    color: #25adad;
    font-size: 1.8rem;
    font-family: "Secular One", sans-serif;
  }
  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    font-family: "Secular One", sans-serif;
  }
  p {
    margin-top: 2rem;
    font-weight: 300;
    font-size: 1.2rem;
    font-family: "Secular One", sans-serif;
  }
  button {
    font-size: 15px;
    padding: 1rem 2rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    font-family: "Secular One", sans-serif;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }
  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    margin-top: 2rem;
    width: 40rem;
    /* filter: drop-shadow(0px 10px 10px #01be9570); */
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }
    @media (max-width: 660px) {
      width: 18rem;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  :hover img {
    transform: translateY(-10px);
  }
`;