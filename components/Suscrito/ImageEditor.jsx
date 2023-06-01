import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function ImageEditor(props) {
 const [text, setText] =  useState('');
 const [image, setImage] = useState(null);
 const canvasRef = useRef(null);

 const handleTextChange = (event) => {
 setText(event.target.value);
 };

 const handleImageChange = (event) => {
 const file = event.target.files[0];
 const reader = new FileReader();
 reader.onload = () => {
 const img =  new window.Image();
 img.src = reader.result;
 img.onload = () => {
 setImage(img);
 };
 };
 reader.readAsDataURL(file);
 };

 const handleExport = () => {
 const canvas = canvasRef.current;
 html2canvas(canvas).then((canvas) => {
 const imgData = canvas.toDataURL('image/png');
 const pdf = new jsPDF();
 pdf.addImage(imgData, 'PNG', 0, 0);
 pdf.save('imagen.pdf');
 });
 };

 return (
 <div>
 <input type="text" value={text} onChange={handleTextChange} />
 <input type="file" accept="image/*" onChange={handleImageChange} />
 <button onClick={handleExport}>Exportar a PDF</button>
 {image && (
 <canvas
 ref={canvasRef}
 width={props.width}
 height={props.height}
 style={{ border: '1px solid black' }}
 >
 <img src={image.src} alt="imagen" />
 <span style={{ position: 'absolute', top: 50, left: 50, fontSize: 30 }}>
 {text}
 </span>
 </canvas>
 )}
 </div>
 );
}

export default ImageEditor;