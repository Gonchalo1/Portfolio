import React, { useEffect, useState } from 'react';
import '../../../App.css'; // Asegúrate de que el archivo CSS está en la ruta correcta
import Imagen from '../../../img/home/pinguino.gif';


const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    // Margen de distancia entre el mouse y la imagen
    const margin = 50;

    setPosition({
      x: event.clientX + margin, // Ajusta el margen horizontal
      y: event.clientY + margin  // Ajusta el margen vertical
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <img
      id="mouse-follower"
      src={Imagen} // Ajusta el path a tu imagen
      alt="Oveja Oscar"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default MouseFollower;
