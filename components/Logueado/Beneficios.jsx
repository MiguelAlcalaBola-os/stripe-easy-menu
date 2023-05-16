import React from 'react';
import styled from 'styled-components';


function Beneficios() {
  return (
    <Texts>
      <br />
      <br /> 
      <h1>Beneficios por suscripcion</h1>
      <br />
      <h2>Económica</h2>
      <br />
      <br />
      <br />
      <br />
      <Images>
        <div className="flex-item">
          <img src="https://i.ibb.co/m8DCn0t/basic-crown.png"></img>
          <p>
          Prioridad media
          </p>
        </div>
        <div className="flex-item"></div>
        <div className="flex-item">
          <img src="https://i.ibb.co/60cRnW2/contenido-basico.png"></img>
          <p>
        Contenido basico
          </p>
        </div>
        <div className="flex-item">
          <img src="https://i.ibb.co/Ct22Lvg/Herramientas-basicas.png"></img>
          <p>
          Herramientas basicas
          </p>{" "}
        </div>
      </Images>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <Texts2>
      <br />
      <br />
      <h2>Premium</h2>
    
      <br />
      <br />
      <Images>
        <div className="flex-item">
          <img src="https://i.ibb.co/RPSfgy2/Mayor-prioridad.png"></img>
          <p>
          Mayor prioridad
          </p>
        </div>
        <div className="flex-item"></div>
        <div className="flex-item">
          <img src="https://i.ibb.co/2h7jNsL/Todo-el-contenido.png"></img>
          <p>
          Todo el contenido
          </p>
        </div>
        <div className="flex-item">
          <img src="https://i.ibb.co/WzTX9RQ/Mayor-priodiad.png"></img>
          <p>
          Mayor comunicacion con nosotros 
          </p>{" "}
        </div>
      </Images>
      
      <br />
      <br />
      <br />
     
    </Texts2>
    </Texts>
    
  )
}

export default Beneficios

const Texts = styled.div`
  text-align: center;
  background-color: #d6f3fd;
  font-family: "Secular One", sans-serif;
  h1 {
    color: #4794cf;
  }
`;
const Images = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  font-family: "Secular One", sans-serif;
  img {
    max-width: 50%;
    height: auto;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Texts2 = styled.div`
  text-align: center;
  background-color: #b4ddf6;
  font-family: "Secular One", sans-serif;
  h1 {
    color: #4794cf;
  }
`;
