import React from "react";
import styled from "styled-components";




export default function DarkMode(){
    return(
        <Container>
            <input type="checkbox" id="darkmode-toggle"/>
            <label for="darkmode-toggle"></label>
        </Container>
    );
}


const Container = styled.div`

    label {
    width:20px;
    height:auto;
    position: relative;
    display: block;
    background: #ebebeb;
    border-radius: 200px;
    }
    
`;