import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e8f4ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #4794cf;
    margin-bottom: 20px;
    font-family: "Secular One", sans-serif;
  }
`;

const Title = styled.h2`
margin-top: 3rem;
  font-size: 24px;
  margin-bottom: 20px;
  font-family: "Secular One", sans-serif;

  color: #4794cf;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 90%;
  margin-bottom: 20px;
  margin-top: 3rem;
`;

const Image = styled.img`
  width: 30%;
  height: auto;
  margin-top: 3rem;
`;

const Button = styled.button`
margin-top: 3rem;
  background-color: #0078d4;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 4rem;
  &:hover {
    background-color: #005a9e;

  }

`;

const PlantillasDeMenu = () => {
  return (
    <Container>
   
      <Title>Plantillas de Menú</Title>
      <h2>
        Estas son nuestras plantillas más utilizadas en las últimas semanas
      </h2>
     
      <ImagesContainer>
        <Image
          src="https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png"
          alt="Imagen 1"
        />
        <Image
          src="https://i.ibb.co/fFMH28m/restaurant-menu-with-pictures-template-design-7f0cd7b69fb7d71b01424522fa5f5b6b-screen.jpg"
          alt="Imagen 2"
        />
        <Image
          src="https://i.ibb.co/K2rfsKL/restaurant-menu-digital-display-design-template-5d2609decd85935bedd2a3a6d9a9982e-screen.jpg"
          alt="Imagen 3"
        />
      </ImagesContainer>
    
      <Button>Ver más</Button>
      
    </Container>
  );
};

export default PlantillasDeMenu;
