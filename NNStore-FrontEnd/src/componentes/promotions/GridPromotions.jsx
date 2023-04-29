import React, { useContext, useEffect, useState } from 'react'

import styled from 'styled-components';
import Product from './Product';





const GridPromotions = ({productos}) => {
  
  const firstFiveElements = productos.slice(0, 5);
 
 
 

  return (
    <Container >
          {firstFiveElements.map((item)=>(
            <Product productos={item} />
          ))}
                   
    </Container>
  )
}


const Container = styled.div`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  width: 100%;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;

`;


export default GridPromotions