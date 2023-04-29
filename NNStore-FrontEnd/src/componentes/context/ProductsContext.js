import {  createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const ProductsContext = createContext();


const ProductsProvider =  ({children}) =>{
    const [dbProductos, setDbProductos] = useState({}) 

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    let api = helpHttp();
    let url = "http://localhost:5000/productos"
  
    useEffect(() =>{
      setLoading(true);
      api.get(url).then((res)=>{
        
        if(!res.err){
          setDbProductos(res)
          setError(null);
          
        }else{
            setDbProductos(res)
          setError(res);
        }
      });
      setLoading(false);
    },[url]) 

    
    const productos = dbProductos
    return <ProductsContext.Provider data = {productos} >{children}</ProductsContext.Provider>
}


export  {ProductsProvider};

export default ProductsContext;