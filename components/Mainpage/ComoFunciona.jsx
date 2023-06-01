
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex:1;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #4794cf;
  font-family: "Secular One", sans-serif;
 
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0 1rem;
`;

const StepContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  width: 80%;
`;

const StepDescription = styled.p`
  font-size: 1.5rem;
  margin-left: 2rem;
  font-family: "Secular One", sans-serif;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: right;

`;

const Image = styled.img`
  width:70%;
  height: auto;
  margin: 4rem;
`;
const Wrapper = styled.div`
  display: flex;
`
const Div2 =styled.div`
  flex:1;
  margin-top: 3em;
  @media(max-width: 720px){
     
      
        display: none;
      
    
    }
`
const ComoFunciona = () => {
  return (
   
    <Wrapper>
    <Container>
 
      <Title>¿Cómo funciona?</Title>
      
      <br/>
      <br/>
      <br/>
      <StepContainer>
      <Icon src="https://i.ibb.co/4WkK4qz/create-menu-icon-B-squeda-de-Google-y-6-p-ginas-m-s-Personal-Microsoft-Edge-13-05-2023-06-06-00-p-m.png" />
        <StepDescription> Crear menú</StepDescription>
      </StepContainer>
      <StepContainer>
      <Icon src="https://i.ibb.co/7KMknw1/1267378.png" />
        <StepDescription>Escoger personalización</StepDescription>
      </StepContainer>
      <StepContainer>
      <Icon src="https://i.ibb.co/x6jfgvB/6061056.png" />
        <StepDescription>Modificar personalización</StepDescription>
      </StepContainer>
      <StepContainer>
      <Icon src="https://i.ibb.co/9H48JG5/exportar.png" />
        <StepDescription>Exportalo en PDF</StepDescription>
      
      </StepContainer>
     

      
    </Container>
    <Div2>
    <ImageContainer>
        <Image src="https://i.ibb.co/tzDY2bN/b97d0e2f8f9d095536f728964f05217f.jpg" alt="Cómo funciona" />
      </ImageContainer>
    </Div2>

    </Wrapper>
  );
}
export default ComoFunciona;
/*   */