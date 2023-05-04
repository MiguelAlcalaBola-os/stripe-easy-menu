import React from 'react';
import styled from 'styled-components';
/*import { SiProbot } from 'react-icons/si';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const Icon = styled(SiProbot)`
  margin-right: 8px;
`;

const Beneficios = () => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Beneficios</Th>
          <Th>Cuenta Pro</Th>
          <Th>Cuenta Premium</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td><Icon />Acceso a contenido exclusivo</Td>
          <Td>✔</Td>
          <Td>✔</Td>
        </tr>
        <tr>
          <Td><Icon />Descuentos en compras</Td>
          <Td>✔</Td>
          <Td>✔</Td>
        </tr>
        <tr>
          <Td><Icon />Soporte técnico prioritario</Td>
          <Td>✔</Td>
          <Td>✔</Td>
        </tr>
        <tr>
          <Td><Icon />Espacio de almacenamiento adicional</Td>
          <Td>✔</Td>
          <Td>✔</Td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Beneficios;*/

function Beneficios() {
  return (
    <div>

   
    <Texts>
    <h3>EASY MENU OFRECE LOS SIGUIENTES BENIFUICIOS</h3>
    <h1>PAQUETE PRO 4.99</h1>

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
  <Texts>
    <h3>EASY MENU OFRECE LOS SIGUIENTES BENIFUICIOS</h3>
    <h1>PAQUETE PREMIUM 8.99</h1>

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
   </div>
  )
}

export default Beneficios

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
