import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import {Estadisticas} from "../pages/Estadisticas"
import {Productos} from "../pages/Productos"
import Navbar from "../componentes/Navbar"
import Categoria from "../pages/Categoria"
import Producto from "../pages/Producto"
import { ProductsProvider } from "../componentes/context/ProductsContext"


export function MyRoutes(){
     return(
        
                <Routes>
                    
                    <Route path="/" element = {<Home/>}/>
                    <Route path="/estadisticas" element = {<Estadisticas/>}/>
                    <Route path="/productos"  element = {<Productos/>}/>
                    <Route path="/categoria/:id" element = {<Categoria/>}/>
                    <Route path="/categoria/:id" element = {<Producto/>}/>
                    
                </Routes>
        
     );
}