import React from "react";
import styled from "styled-components";
function Precios() {
  return (
    <Texts>
      <br />
      <br />
      <br />
      <h1>Nuestras suscripciones</h1>
      
      <br />

      <br />
      <Images>
        <div className="flex-item">
          <h3>Básico 9,99€</h3>
          <img src="https://i.ibb.co/ZxvPRWm/economico.png"></img>
          <p>Tendrás acceso a ciertos beneficios de Easy-Menu</p>
        </div>

        <hr />

        <div className="flex-item">
          <h3>Premium 19,99€ </h3>
          <img src="https://i.ibb.co/g3rc5T2/Premium-2.png"></img>
          <p>Obtendrás todos los beneficios de Easy-Menu</p>
        </div>
      </Images>

      <br />
      <br />
      <br />
      <br />
      <br />
    </Texts>
  );
}

const Texts = styled.div`
  text-align: center;
  background-color: #d5eafe;
  font-family: "Secular One", sans-serif;
  h1 {
    color: #4794cf;
  }
`;
const Images = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  font-family: "Secular One", sans-serif;

  img {
    padding: 4em;
    max-width: 45%;
    height: auto;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
export default Precios;
