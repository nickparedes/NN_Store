import React from 'react'
import styled  from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from "../../App";
const Barra = ({title}) => {
    
  const {setTheme, theme} = useContext(ThemeContext)
  return (
    <Container>
        <div className='large'>
            <div className='textoBarra'>{title}</div>
            <button>Ver Todo </button>
        </div>
        <div className='divider'>

        </div>
    </Container>
  )
}


const Container = styled.div`
    
    margin-top: 1rem;
    margin: 0 2rem;
    @media (width < 500px) {
        margin: 0;
    }

    .large{
        display: flex;
        justify-content: space-between;
        margin-left: 0.5rem; 
        
        .textoBarra{
            display: flex;
            justify-content:center;
            align-items: center;
            font-weight: bold;
            border-color: red;
        }
    
    }


    .divider{
        height: 1px;
        width: 100%;
        background: black;
        margin: 5px 0;
    }


    button{
        display: flex;
        background: ${(props) =>props.theme.buttonColor};
        margin-right: 0.5rem;
        width: auto;
        height: 36px; 
        min-width: 80px;
        justify-content: space-around;
        border-radius: 20px;

    }

`


export default Barra