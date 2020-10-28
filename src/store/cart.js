const initialState = {
  inventory: []
}


// Reducer
export default (state = initialState, action) => {

  const {type, payload, product} = action;
  let sameProduct, index;

  switch(type) {
    case 'AddCart':
      [sameProduct, index] = findExisting(state.inventory, product.name);
      if(sameProduct) {
        state.inventory.splice(index, 1, sameProduct)
        return {...state};
      }
      return {...state, inventory: [...state.inventory, product]}

    case 'RemoveCart':
      [sameProduct, index] = findExisting(state.inventory, payload);
      if(sameProduct && sameProduct.cart > 0) return {...state};
      
      state.inventory.splice(index, 1)
      return {...state};

    default:
      return state;
  }
} 

const removeOne = (products, choice) => {
  return products.filter(product => product.name !== choice);
}

const findExisting = (products, name) => {
  for(let i = 0; i < products.length; i++) {
    if(products[i].name === name) return [products[i], i];
  }
  return [null, null];
}