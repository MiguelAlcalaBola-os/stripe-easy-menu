import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Paragraph = styled.p`
  margin: 10px;
  flex: 1;
  p{
    font-size: 17px;
  }
`;

function Parrafos() {
  return (
    <Container>
      <Paragraph>
        <p>
          Descubre Menu-Easy, la solución completa para los que buscan
          simplificar la creación y gestión de sus menús.
        </p>
        <p>
          Con una interfaz fácil de usar y opciones de personalización
          ilimitadas, podrás crear menús atractivos y funcionales que reflejen
          la identidad de tu restaurante en cuestión de minutos.
        </p>
      </Paragraph>
      <Paragraph>
        {" "}
        <p>
          Menu-Easy te ofrece plantillas y diseños personalizables,
          permitiéndote desatar tu creatividad sin límites.
        </p>
        <p>
          Además, podrás exportar tus menús en el formato y tamaño que
          prefieras, ya sea para imprimir o para compartir en línea Incluso
          podrás generar un código QR para que tus clientes accedan fácilmente a
          tu menú digital.
        </p>
      </Paragraph>
      <Paragraph>  <p>
      Mantener tus menús actualizados nunca ha sido tan sencillo. Con Menu-Easy, podrás realizar cambios en tiempo real, añadir nuevos platos y modificar precios con solo unos pocos clics.
        </p>
        <p>
        Olvídate de los dolores de cabeza técnicos pidiéndole el favor a tu diseñador cada vez que haya cambios. Simplifica tu vida y mejora la experiencia de tus clientes con Menu-Easy.
        </p></Paragraph>
    </Container>
  );
}

export default Parrafos;
