import React from "react";
import styled from "styled-components";

const Container = styled.div`

margin: 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 23%;

  margin-bottom: 100px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
 font-family: "Secular One", sans-serif;
  margin-top: 10px;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  color: #ffffff;
`;
const TittleComponent = styled.div`
 font-family: "Secular One", sans-serif;
    text-align: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: bold;
    font-family: "Secular One", sans-serif;
`
const Description = styled.p`
 font-family: "Secular One", sans-serif;
  margin-top: 5px;
  font-size: 21px;
  text-align: left;
  color: #ffffff;
`;

const images = [
  {
    id: 1,
    src: "https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png",
    title: "Minimalista",
    description: "Descripción de la imagen 1",
  },
  {
    id: 2,
    src: "https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png",
    title: "Imagen 2",
    description: "Descripción de la imagen 2",
  },
  {
    id: 3,
    src: "https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png",
    title: "Imagen 3",
    description: "Descripción de la imagen 3",
  },
  {
    id: 4,
    src: "https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png",
    title: "Imagen 4",
    description: "Descripción de la imagen 4",
  },
  {
    id: 5,
    src: "https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png",
    title: "Imagen 4",
    description: "Descripción de la imagen 4",
  },
  {
    id: 6,
    src: "https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png",
    title: "Imagen 4",
    description: "Descripción de la imagen 4",
  },
  {
    id: 7,
    src: "https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png",
    title: "Imagen 4",
    description: "Descripción de la imagen 4",
  },
  {
    id: 8,
    src: "https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png",
    title: "Imagen 4",
    description: "Descripción de la imagen 4",
  },
];

const ImageGrid = () => {
  return (
    <Div>
        <br/>
        <br/>
            <TittleComponent>This is a tittle</TittleComponent>
   
    <Container>
       {images.map((image) => (
        <ImageContainer key={image.id}>
          <Image src={image.src} alt={image.title} />
          <Title>{image.title}</Title>
          <Description>{image.description}</Description>
        </ImageContainer>
      ))}
     
    </Container>
    </Div>
  );
};

export default ImageGrid;
const Div = styled.div`
    background-color: #43c7c7;
`