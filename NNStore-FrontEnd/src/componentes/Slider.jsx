import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';


const SlideContainer = styled.div`
  
    width: 100%;
    
    height: 50vh;  /*Establece la altura al 100% del viewport */
    @media (width < 500px) {
        height: calc(50vh - 82px);
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin:5px 0; 
    
`;

const SlideImage = styled.img`
    width: 100%; /* Establece el ancho al 100% del contenedor */
    height: 100%; /* Establece la altura al 100% del contenedor */
    object-fit: cover; /* Ajusta automáticamente el tamaño de la imagen para cubrir el contenedor */
    border-radius: 30px;
    
`;

const CC = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    @media (width < 500px) {
        margin: 0;
    }
`;
const Slider = ({ images }) => {
  return (
        <CC >
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showStatus={false}  >
                {images.map((image, index) => (
                    <SlideContainer key={index}>
                        <SlideImage src={image.image} alt={`Slide ${index}`} />
                    </SlideContainer>
                ))}
            </Carousel>
        </CC>
    
  );
};

export default Slider;