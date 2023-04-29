import React, {useState} from "react";
import styled from "styled-components";

export default function SwitchMode({active, theme, setTheme, mode}){

    

    const cambiarTheme =  () => {
        setTheme((theme) => (theme ==="light" ? "dark" : "light"))
        console.log(theme)
    };
    

    return(
        <Container className={active ? "active": ""}>
                <span className="switch">
                  <input id="switch-round" type="checkbox" onClick={cambiarTheme} />
                  <label htmlFor="switch-round"></label>
                </span>
                {active && (<div className="switch-label">{(theme==="light") ? mode.left: mode.right}</div>)}
        </Container>
    );
}


const Container = styled.div`


    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    width: 100%;
    gap: 18px;
    
    &.active{
        padding: 0px 15%;
        justify-content: flex-start;
    }

    .switch-label {
        font-size: 14px;
        color: white;
      }
      
      .switch {
        display: inline-block;
      }
      
      .switch input {
        display: none;
      }
      
      .switch label {
        display: block;
        width: 40px;
        height: 20px;
        padding: 2px;
        border-radius: 15px;
        border: 2px solid ${(props) =>props.theme.switch};
        cursor: pointer;
        transition: 0.3s;
      }
      
      .switch label::after {
        content: "";
        display: inherit;
        width: 19px;
        height: 13px;
        border-radius: 12px;
        background: ${(props) =>props.theme.switch};
        transition: 0.3s;
      }
      
      .switch input:checked ~ label {
        border-color: ${(props) =>props.theme.switch};
      }
      
      .switch input:checked ~ label::after {
        translate: 20px 0;
        background: ${(props) =>props.theme.switch};
      }
      
      .switch input:disabled ~ label {
        opacity: 0.35;
        cursor: not-allowed;
      }
      
      .switch.square label,
      .switch.square label::after {
        border-radius: 0;
      }
`;


