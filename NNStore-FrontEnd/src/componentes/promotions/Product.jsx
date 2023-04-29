import React from 'react'
import styled from 'styled-components'
import Divider from '../Divider'
import { useDispatch, useSelector } from 'react-redux';


const Product = ({productos}) => {
    console.log(productos);
    const {categoria,descuento, id,img, name, price, stock }= productos;

    const state = useSelector(state => state)
    const dispatch = useDispatch();


    console.log(state)

    const priceOff = price*(1 - descuento);
    return (
    <Container>

            <div className='seccion1'>
                <img src={img} alt={name} />
                <div className="off shape">
                    <p>{descuento}%</p>
                    <p>off</p>
                </div>
            </div>
            <div className='seccion2'>
                <p className="title"> {name} </p>
                <div className='prices'>
                    <p className="price-Real">${price}</p>
                    <p className="price-off">${priceOff }</p>
                </div>
            </div>

            <div className='divider'></div>
            <div className='seccion3'>
                 <span className='price-final'>Save - ${price - priceOff}</span> 
                <button class="material-symbols-outlined buttonColor cart">shopping_cart</button>
            </div>

    </Container>
  )
}

const Container = styled.div`

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
    border-color: ${(props)=>(props.theme.text)};

    &:hover{
        transform:scale(1.1);
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    }
    .seccion1 {
        position: relative;

        .off{
            position: absolute;
            display: flex;
            top: 0px;
            right: 0px;
            background-color: red;
            color: white;
            padding: 5px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .shape{
            
            
            border-top-right-radius: 10px;
            clip-path: circle(78.2% at 78% 36%);

        }
    
    }

    .seccion2{
        width: 100%;
        display:flex;
        padding: 0 0.8rem;
        flex-direction: column;
        align-content: flex-start;
        .title{
            padding: 0.2rem 0;
            font-size: 20px;
        }
        .prices{
            display: flex;
            gap: 1rem;

            .price-Real{
                font-weight: slim;
             
            }
            .price-off{
                text-decoration: line-through;
            }
        }
    }

    .seccion3{
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        .cart{

            justify-content: right;
            color: red;
            width: 48px;
        }

        .price-final{
           color: green;
            padding: 0.5rem 0.8rem;
        }
    }

      

    img{
        width:100%;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    button{
        background: white;
        color: green;
        width: 100%;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        display: flex;
        padding: 0.5rem 0.8rem;
    }


    .divider{
        height: 1px;
        width: 90%;
        background: ${(props) => props.theme.text};
        margin-top: 5px;
    }
`

export default Product;