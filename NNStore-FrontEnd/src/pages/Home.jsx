import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import Navbar from "../componentes/Navbar";
import Prueba from "../componentes/Prueba";
import Promotions from "../componentes/promotions/Promotions"
import {funcionExtraccion} from "../componentes/utils/helpFuncions"

import Slider from "../componentes/Slider";
import ShoppingCart from "../componentes/cart/ShoppingCart";
import ProductsContext, { ProductsProvider } from "../componentes/context/ProductsContext";
import { helpHttp } from "../componentes/helpers/helpHttp";


export const productos = [
	{ id:1 ,name:"producto 1",  price: 2000,  descuento:  "0.20", stock: "1" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg",categoria:"tecnologia"},
	{ id:2 ,name:"producto 2",  price: 2000,  descuento:  "0.20", stock: "2" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Moda"},
	{ id:3 ,name:"producto 3",  price: 2000,  descuento:  "0.20", stock: "3" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:  "Accesorios"},
	{ id:4 ,name:"producto 4",  price: 2000,  descuento:  "0.20", stock: "4" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:  "Hogar"},
	{ id:5 ,name:"producto 5",  price: 2000,  descuento:  "0.20", stock: "5" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "tecnologia" },
	{ id:6 ,name:"producto 6",  price: 2000,  descuento:  "0.20", stock: "6" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Moda"},
	{ id:7 ,name:"producto 7",  price: 2000,  descuento:  "0.20", stock: "7" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:  "Accesorios"},
	{ id:8 ,name:"producto 8",  price: 2000,  descuento:  "0.20", stock: "8" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Moda"},
	{ id:9 ,name:"producto 9",  price: 2000,  descuento:  "0.20", stock: "9" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", cateeoria:  "Hogar"},
	{id:10 ,name:"producto 10", price: 2000, descuento: "0.50", stock: "10" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Hogar"},
	{id:11 ,name:"producto 11", price: 2000, descuento: "0.50", stock: "11" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Accesorios" },
	{id:12 ,name:"producto 12", price: 2000, descuento: "0.50", stock: "12" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:"Moda" },
	{id:13 ,name:"producto 13", price: 2000, descuento: "0.50", stock: "13" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Accesorios"},
	{id:14 ,name:"producto 14", price: 2000, descuento: "0.50", stock: "14" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:"Moda" },
	{id:15 ,name:"producto 15", price: 2000, descuento: "0.50", stock: "15" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:"tecnologia" },
	{id:16 ,name:"producto 16", price: 2000, descuento: "0.50", stock: "16" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:"Moda" },
	{id:17 ,name:"producto 17", price: 2000, descuento: "0.50", stock: "17" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:"Moda" },
	{id:18 ,name:"producto 18", price: 2000, descuento: "0.80", stock: "18" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Hogar"},
	{id:19 ,name:"producto 19", price: 2000, descuento: "0.80", stock: "19" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Accesorios"},
	{id:20 ,name:"producto 20", price: 2000, descuento: "0.80", stock: "20" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Hogar"},
	{id:21 ,name:"producto 21", price: 2000, descuento: "0.80", stock: "21" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Accesorios" },
	{id:22 ,name:"producto 22", price: 2000, descuento: "0.80", stock: "22" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:"Moda" },
	{id:23 ,name:"producto 23", price: 2000, descuento: "0.80", stock: "23" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:"Moda"},
	{id:24 ,name:"producto 24", price: 2000, descuento: "0.80", stock: "24" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:"tecnologia" },
	{id:25 ,name:"producto 25", price: 2000, descuento: "0.80", stock: "25" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:"Moda"},
	{id:26 ,name:"producto 26", price: 2000, descuento: "0.25", stock: "26" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Accesorios" },
	{id:27 ,name:"producto 27", price: 2000, descuento: "0.25", stock: "27" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:"Moda" },
	{id:28 ,name:"producto 28", price: 2000, descuento: "0.25", stock: "28" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Accesorios"},
	{id:29 ,name:"producto 29", price: 2000, descuento: "0.25", stock: "29" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "Hogar"},
	{id:30 ,name:"producto 30", price: 2000, descuento: "0.35", stock: "30" , img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria:"Moda" },
	{ id:31 ,name:"producto 31",price: 2000, descuento:  "0.5", stock: "5" ,  img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "tecnologia" },
	{ id:32 ,name:"producto 32",price: 2000, descuento:  "0.5", stock: "5" ,  img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "tecnologia" },
	{ id:33 ,name:"producto 33",price: 2000, descuento:  "0.5", stock: "5" ,  img: "https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg", categoria: "tecnologia" },

]


export default function Home(){

	

    const images = [
		{
			id: '1',
			title: 'Awesome forest',
			image:
				'https://cdn.pixabay.com/photo/2020/11/09/15/12/trail-5726987_960_720.jpg',
		},
		{
			id: '2',
			title: 'A litle bird.',
			image:
				'https://cdn.pixabay.com/photo/2011/09/27/18/52/bird-9950_960_720.jpg',
		},
		{
			id: '3',
			title: 'The best friend.',
			image:
				'https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg',
		},
		{
			id: '4',
			title: 'Beautiful desert.',
			image:
				'https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759_960_720.jpg',
		},
		{
			id: '5',
			title: 'Harley Davidson motorcycle.',
			image:
				'https://cdn.pixabay.com/photo/2018/10/26/22/55/harley-davidson-3775527_960_720.jpg',
		},
	]

	const [dbProductos, setDbProductos] = useState(productos) 

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
	const [tecnologia, setTecnologia] = useState(funcionExtraccion(dbProductos , "tecnologia"))
	const [moda, setModa] = useState(funcionExtraccion(dbProductos , "Moda"))
	const [hogar, setHogar] = useState(funcionExtraccion(dbProductos , "Hogar"))
	const [accesorios, setAccesorios] = useState(funcionExtraccion(dbProductos , "Accesorios"))

    
    let url = "http://localhost:5000/productos"
	let data
	
    return(
        <Container>
           
                 <Slider  images={images} />
				  		<Promotions title ={"tecnologia"} productos={tecnologia}/>
						<Promotions title ={"moda"} productos={moda}/>
						<Promotions title ={"hogar"} productos={hogar}/>
						<Promotions title ={"accesorios"} productos={accesorios}/>
        </Container>
    );
}

const Container = styled.div`
    
    margin: 0;
    padding: 0;

	
`