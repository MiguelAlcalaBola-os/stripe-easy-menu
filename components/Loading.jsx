
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animación del spinner
const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Componente principal de la pantalla de carga
const LoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Imagen de carga
const LoadingImage = styled.img`
  width: 30em;
  height:30em;
`;

// Texto de carga
const LoadingText = styled.p`
  font-size: 24px;
  margin-top: 16px;
`;

// Spinner de carga
const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spinAnimation} 0.8s linear infinite;
  margin-top: 16px;
`;

// Componente completo de la pantalla de carga
const Loading = () => (
  <LoadingScreen>
    <LoadingImage src="https://i.ibb.co/DCpYb69/easy-menu.png" alt="Loading" />

    <LoadingSpinner />
    <LoadingText>Easy Menu esta registrando tu cuenta en su base de datos</LoadingText>
  </LoadingScreen>
);

export default Loading;