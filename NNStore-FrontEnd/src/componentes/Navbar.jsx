import React, {useState, useEffect} from "react"
import "./assets/navbar/navbar.css"

const img = require.context("./assets/navbar",true);


export default function Navbar(){

    const [login , setLogin] = useState(false)


    return(
        <nav class="navbar">
            <button class="burger material-symbols-outlined">menu</button>

            <div class="logo">
                <svg width="52" height="20" viewBox="0 0 52 20"  >
                    <path d="M14.484 19H11.124L3.516 7.504V19H0.156V2.224H3.516L11.124 13.744V2.224H14.484V19ZM19.5084 4.12C18.9164 4.12 18.4204 3.936 18.0204 3.568C17.6364 3.184 17.4444 2.712 17.4444 2.152C17.4444 1.592 17.6364 1.128 18.0204 0.759999C18.4204 0.375999 18.9164 0.183999 19.5084 0.183999C20.1004 0.183999 20.5884 0.375999 20.9724 0.759999C21.3724 1.128 21.5724 1.592 21.5724 2.152C21.5724 2.712 21.3724 3.184 20.9724 3.568C20.5884 3.936 20.1004 4.12 19.5084 4.12ZM21.1644 5.704V19H17.8044V5.704H21.1644ZM23.6201 12.352C23.6201 10.976 23.9001 9.776 24.4601 8.752C25.0201 7.712 25.7961 6.912 26.7881 6.352C27.7801 5.776 28.9161 5.488 30.1961 5.488C31.8441 5.488 33.2041 5.904 34.2761 6.736C35.3641 7.552 36.0921 8.704 36.4601 10.192H32.8361C32.6441 9.616 32.3161 9.168 31.8521 8.848C31.4041 8.512 30.8441 8.344 30.1721 8.344C29.2121 8.344 28.4521 8.696 27.8921 9.4C27.3321 10.088 27.0521 11.072 27.0521 12.352C27.0521 13.616 27.3321 14.6 27.8921 15.304C28.4521 15.992 29.2121 16.336 30.1721 16.336C31.5321 16.336 32.4201 15.728 32.8361 14.512H36.4601C36.0921 15.952 35.3641 17.096 34.2761 17.944C33.1881 18.792 31.8281 19.216 30.1961 19.216C28.9161 19.216 27.7801 18.936 26.7881 18.376C25.7961 17.8 25.0201 17 24.4601 15.976C23.9001 14.936 23.6201 13.728 23.6201 12.352ZM46.7936 19L42.2816 13.336V19H38.9216V1.24H42.2816V11.344L46.7456 5.704H51.1136L45.2576 12.376L51.1616 19H46.7936Z"/>
                </svg>
            </div>

            

            <div class="center">
                <div class="search">
                    <input
                    spellcheck="false"
                    type="text"
                    class="search"
                    id="search"
                    placeholder="Search"
                    />
                    <button class="material-symbols-outlined">search</button>
                </div>
            <button class="material-symbols-outlined">mic</button>
            </div>
            <nav>
                <button class="material-symbols-outlined">search</button>
                <button class="material-symbols-outlined">mic</button>
                <button class="material-symbols-outlined">shopping_cart</button>
                <button class="material-symbols-outlined">
                    <span class="badge"></span>location_on
                </button>
                <div className="last-bottom">
                    

                     <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M14 4L17.5 4C20.5577 4 20.5 8 20.5 12C20.5 16 20.5577 20 17.5 20H14M15 12L3 12M15 12L11 16M15 12L11 8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                    </svg> 
                     <span>Login</span> 

                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M14 4L17.5 4C20.5577 4 20.5 8 20.5 12C20.5 16 20.5577 20 17.5 20H14M3 12L15 12M3 12L7 8M3 12L7 16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                        </svg>
                    <img src={img("./prueba.png")} alt="" /> */}
                </div>

            </nav>
      </nav>
    );
}