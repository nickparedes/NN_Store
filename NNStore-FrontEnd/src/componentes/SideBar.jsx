import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import logo from "../componentes/assets/navbar/logo.svg";
import {v} from "../styles/Variables"
import Divider from "./Divider";

import { AiOutlineClockCircle,AiOutlineLeft, AiOutlineHome} from "react-icons/ai";
import { Link } from "react-router-dom";

import { ThemeContext } from "../App";
import SwitchMode from "./SwitchMode";

import DarkMode from "./helpers/DarkMode";

export default function SideBar({sitebarOpen, setSitebarOpen}){
    
    const {setTheme, theme} = useContext(ThemeContext)

    const cambiarTheme =  () => {
        setTheme((theme) => (theme ==="light" ? "dark" : "light"))
    };




    return(
        <Container >
{/*             <div className="Logocontent">
                <div className="imgcontent">
                    <img src={logo}/>
                </div>
            </div> */}
            {linksArray.map(({label, icon, to}) =>(
                <div className="LinkContainer" key={label}>
                    <Link to={to} className={sitebarOpen ? "Links": "Links center" } >
                    <div className="Linkicon">
                        {icon}
                    </div>
                    {sitebarOpen && (<span>{label}</span>)}
                    </Link>
                </div>
            
            ))}

            <Divider/>
            
            <div className="LinkContainer">
                    <Link to = "/" className={sitebarOpen ? "Links": "Links center" }>
                        <div className="Linkicon">
                            <AiOutlineHome/>
                        </div>
                        {sitebarOpen && (<span>Configuracion</span>)}
                    </Link>
            </div>

            <div className="LinkContainer">
                    <Link to = "/" className={sitebarOpen ? "Links": "Links center" } >
                        <div className="Linkicon">
                            <AiOutlineHome/>
                        </div>
                        {sitebarOpen && (<span>Salir</span>)}
                    </Link>
            </div>

            <Divider/>
            
            <SwitchMode active={sitebarOpen} theme={theme} setTheme = {setTheme} mode = {{left: "Light Mode",right: "Dark Mode",}}/>
   
        
        </Container>
    );
}

const linksArray =[
    {
        label: "Tecnología",
        icon: <AiOutlineHome />,
        to:"/",
    },
    {
        label: "Hogar y Muebles",
        icon: <AiOutlineHome/>,
        to: "/estadisticas",
    },
    {
        label: "Deportes",
        icon: <AiOutlineHome/>,
        to: "/productos",
    },
    {
        label: "Moda",
        icon: <AiOutlineHome/>,
        to: "/estadisticas",
    },
    {
        label: "Accesorios",
        icon: <AiOutlineHome/>,
        to: "/estadisticas",
    },
    {
        label: "Construcción",
        icon: <AiOutlineHome/>,
        to: "/estadisticas",
    }

] 




const Container = styled.div`
    background: ${(props) => props.theme.cards};
    color : ${(props) => props.theme.text};
    position: sticky;
    
    margin: 5px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: calc(100vh - 82px);
    
    }
    .Logocontent {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom:${v.lgSpacing}
    }

    .imgcontent{
        display: flex;
        img{
            max-width: 100%;
            height: auto;
        }

    }

    .LinkContainer{
        margin: 8px 0;
        padding: 0 15%;
        
        :hover{
            background: ${(props) =>props.theme.cards};
        }

        span {
            color: ${(props) =>props.theme.text};
        }

        .Linkicon{
           width: 40px;
           display: flex;
           align-items: center;
           justify-content: center;
        
           svg{
            font-size: 30px;
            color: ${(props) =>props.theme.fondIcon};
           }
        }
        .Links{
            gap: 0.5rem;
            display: flex;
            align-items: center;
            
            text-decoration: none;
            
        }
        .center{ 
            justify-content: center;
        }
    }

`;