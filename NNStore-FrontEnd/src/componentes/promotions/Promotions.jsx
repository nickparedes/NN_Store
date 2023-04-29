import React, { useEffect } from "react";
import Barra from "./Barra";
import GridPromotions from "./GridPromotions";
import Products from "./Products";
import styled from "styled-components";
import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const Promotions = ({title, productos}) => {

  


  return (
    <Container>
      
      <Barra title={title}/>
      <GridPromotions productos={productos}/> 
      
    </Container>
  );
};

export default Promotions;


const Container = styled.div`
  padding: 1rem 0;

`