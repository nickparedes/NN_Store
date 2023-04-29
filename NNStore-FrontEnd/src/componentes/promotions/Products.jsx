import React from 'react'
import styled from 'styled-components'
const Products = () => {
  return (
    <Container>

            <h2 class="price">$399</h2>
            <h2 class="heading"> CRYSTAL </h2>
            <h3 class="plan"> Monthly Plan </h3>
            
            <img src="https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg" alt="" />
            <article class="content">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur a incidunt vitae nobis, sunt ea
                    assumenda possimus. Cum repellendus accusamus quia quis. Fugiat!</p>
            </article>
            <button class="btn"> Comprar </button>
 
    </Container>
  )
}

const Container = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    border: 1px solid ${(props)=>(props.theme.cards)};
    display: flex;
    border-radius:10px;
    margin: 30px 10px;
    width: 250px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        transform:scale(1.1);
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0);
    }

    img{
        width: 90%;
        border-radius: 10px;
        margin-top: 10px;
        box-shadow: 5px 5px 10px rgba(0,0,0,0);
    }

    .price {
        color: ${(props)=>(props.theme.textButtonColor)};
        background-color: ${(props)=>(props.theme.buttonColor)};
        padding: 10px;
        /* display: none; */
        visibility: hidden; 
        transition: all 0.4s;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        width: 100%;
        text-align: center;
    }
    
    .heading {
        margin: 10px;
    }

    .plan {
        color: ${(props)=>(props.theme.text)};;
    }

    article {
        text-align: center;
        margin: 20px 8px;
    }
    
    button {
        width: auto;
        background-color: ${(props)=>(props.theme.buttonColor)};
        border-radius: 20px;
        padding: 10px;
        color: #fff;
        margin: 10px 0;
        font-weight: 400;
        cursor: pointer;
        border: none;
        transition: all 0.5s;
    }
    
    button:hover {
        width: 100%;
    }
    
    &:hover .price {
        /* display: block; */
        transition: all 0.4s;
        visibility: visible;
    }

`;

export default Products