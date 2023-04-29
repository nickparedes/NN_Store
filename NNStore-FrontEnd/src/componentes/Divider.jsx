import React from "react"
import { v } from "../styles/Variables"
import styled from "styled-components"

export default function Divider()  {
    return (
        <Container>
            
        </Container>
    )
}

const Container = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.text};
    margin: ${v.lgSpacing} 0;
`
