import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products';
import categories from './categories';
let reducers = combineReducers({products, categories});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();

export const change = (name) =>{
    return {
        type: 'Change',
        payload: name
    }
}