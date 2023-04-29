import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from "../types";
import {productos} from  "../../pages/Home"

const initialState = {
    productos,
    cart:[]
};

export default function shoppingCart(state = initialState, action){
    switch (action.type) {
        case ADD_TO_CART:
            return state;
        case REMOVE_ONE_FROM_CART:
            return state;
        case REMOVE_ALL_FROM_CART:
            return state;
        case CLEAR_CART:
            return state;

        default:
            return state;
    }
}