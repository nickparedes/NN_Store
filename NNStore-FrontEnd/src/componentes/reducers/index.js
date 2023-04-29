import { combineReducers } from "redux";  //Combina todos los reducers en uno solo
import contadorReducer from "./contadorReducers";
import shoppingCart from "./shoppingCart";


const reducer = combineReducers({

    shopping: shoppingCart,
})


export default reducer;