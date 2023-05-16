import React from 'react'
import Sidebar from "./Sidebar"
import styled from 'styled-components';

function Premium() {
  return ( 
    
    <>
    <Content>
    <Sidebar/>
    <Wrapper>
      <Image src="https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png" alt="imagen 1" />
      <Image src="https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png" alt="imagen 2" />
      <Image src="https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png" alt="imagen 3" />
      <Image src="https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png" alt="imagen 4" />
      <Image src="https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png" alt="imagen 5" />
      <Image src="https://i.ibb.co/0Y6x0Jg/Espe-cialidades-blanc-0000-Calque-1-1.png" alt="imagen 6" />
    </Wrapper>
     </Content>
    
  </>
  )
}

export default Premium
const Content = styled.div `
  display: flex;
  flex-direction: row;
  flex: 1;
`



const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;



const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
