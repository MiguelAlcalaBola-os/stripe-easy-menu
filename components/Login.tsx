import React, { ReactElement } from "react";
import ComoFunciona from "../components/Mainpage/ComoFunciona";
import PlantillasDeMenu from "../components/Mainpage/PantillasDeMenu";
import styled from "styled-components";
import Navbar from "./Mainpage/Navbar";
import Banner from "./Mainpage/Banner";
import Footer from "../components/Footer";

interface Props {}

export default function Login({}: Props): ReactElement {
  return (
    <>
      <Navbar></Navbar>
      <Banner />

      <Texts>
      <br />
        <br />
        <br />
        <br /> 
        <h1>Nuestros clientes resaltaron que</h1>
        <h4>EasyMenu ofrece una gran variedad de beneficios</h4>
        <br />
        <br />
        <br />
        <br />
        <Images>
          <div className="flex-item">
            <img src="https://i.ibb.co/ZzmdbGQ/6117151.png"></img>
            <p>
            Ahorra tiempo y crea tu menú con unos cuantos clicks 
            </p>{" "}
          </div>
          <div className="flex-item"></div>
          <div className="flex-item">
            <img src="https://i.ibb.co/f8BDYcP/2951386731633054673-512.png"></img>
            <p>
            Manejo sencillo y rápido de utilizar 
            </p>{" "}
          </div>
          <div className="flex-item">
            <img src="https://i.ibb.co/37TNNsh/productivity.png"></img>
            <p>
            Modifícalo cuantas veces quieras
            </p>{" "}
          </div>
        </Images>
        
        <br />
        <br />
        <br />
        <br />
        <br />
      </Texts>
      
      <ComoFunciona />
      
      <PlantillasDeMenu></PlantillasDeMenu>
      <Footer></Footer>
    </>
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
