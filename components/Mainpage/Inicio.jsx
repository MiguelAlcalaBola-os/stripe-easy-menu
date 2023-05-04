import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "../Footer";

function Inicio() {
  return (
    <>
    <Navbar/>
    <Banner/>
      <Texts>
        <h1>Maneja tus menus a tu antojo</h1>
        <h4>mira todos los beneficios que te ofrecemos</h4>

        <Images>
          <div className="flex-item">
            <img src="https://i.pinimg.com/originals/bd/c2/48/bdc248a325858c5e585b0a97af8c2226.png"></img>
            <p>esta es uan descripcion, esta es uan descripcion, esta es uan descripcion</p> </div>  <div className="flex-item">
              </div>
          <div className="flex-item">
            <img src="https://i.pinimg.com/originals/bd/c2/48/bdc248a325858c5e585b0a97af8c2226.png"></img>
            <p>esta es uan descripcion, esta es uan descripcion, esta es uan descripcion</p> </div>  <div className="flex-item">
            <img src="https://i.pinimg.com/originals/bd/c2/48/bdc248a325858c5e585b0a97af8c2226.png"></img>
            <p>esta es uan descripcion, esta es uan descripcion, esta es uan descripcion</p> </div>
        </Images>
      </Texts>
  <Footer></Footer>
    </>
  );
}

export default Inicio;

const Texts = styled.div`
  text-align: center;
`;
const Images = styled.div`
  display: flex;
width: 100%;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
