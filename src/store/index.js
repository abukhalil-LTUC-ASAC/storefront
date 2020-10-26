import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products';
import categories from './categories';
import cart from './cart';

let reducers = combineReducers({products, categories, cart});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();

export const change = (category) =>{
    return {
        type: 'ChangeCat',
        payload: category,
        product: null,
    }
}

export const addCart = (product) =>{
    return {
        type: 'AddCart',
        payload: product.name,
        product: product,
    }
}

export const removeCart = (product) =>{
    return {
        type: 'RemoveCart',
        payload: product.name,
        product: product,
    }
}