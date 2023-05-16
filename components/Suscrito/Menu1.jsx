import React, { useRef } from "react";
import styled from "styled-components";
import { jsPDF } from "jspdf";

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

const Image = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
`;

const Menu1 = ({ src }) => {
  const textRef = useRef(null);

  const exportPdf = () => {
    const doc = new jsPDF();
    const imgData = textRef.current.toDataURL("image/png");
    doc.addImage(imgData, "PNG", 10, 10, 180, 180);
    doc.save("image.pdf");
  };

  return (
    <Container>
      <Image src={src}>
        <Text
          ref={textRef}
          top={50}
          left={50}
          color="white"
          fontSize={24}
        >
          Ejemplo de texto sobre imagen
        </Text>
      </Image>
      <button onClick={exportPdf}>Exportar a PDF</button>
    </Container>
  );
};

export default Menu1;
