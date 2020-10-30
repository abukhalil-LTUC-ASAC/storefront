import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import products from './products';
import categories from './categories';
import cart from './cart';
import superagent from 'superagent';

let reducers = combineReducers({products, categories, cart});
let api = 'https://ash-todolist.herokuapp.com/';

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();

export const getRemoteData = (type) => (dispatch) => {
    return superagent.get(api + type).then(data=> {
        if (type == 'products') {dispatch(getProducts(data.body))};
        if (type == 'categories') {dispatch(getCategories(data.body))};
    });
}

const getProducts = payload => {
    return {
        type: 'GET.P',
        payload: payload
    }
}

const getCategories = payload => {
    return {
        type: 'GET.C',
        payload: payload
    }
}

export const change = (category) =>{
    console.log('changing to: ', category);
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