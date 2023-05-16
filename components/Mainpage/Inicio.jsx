import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "../Footer";
import ComoFunciona from "./ComoFunciona";

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
            <img src="https://i.ibb.co/ZzmdbGQ/6117151.png"></img>
            <p>esta es uan descripcion, esta es uan descripcion, esta es uan descripcion</p> </div>  <div className="flex-item">
              </div>
          <div className="flex-item">
            
            <img src="https://i.ibb.co/f8BDYcP/2951386731633054673-512.png"></img>
            <p>esta es uan descripcion, esta es uan descripcion, esta es uan descripcion</p> </div>  <div className="flex-item">
            <img src="https://i.ibb.co/37TNNsh/productivity.png"></img>
            <p>esta es uan descripcion, esta es uan descripcion, esta es uan descripcion</p> </div>
        </Images>
      </Texts>
      <ComoFunciona/>
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
