const initialState = {
  inventory: []
}


// Reducer
export default (state = initialState, action) => {

  const {type, payload, product} = action;
  console.log(product);
  switch(type) {
    case 'AddCart':
      return {...state, inventory: [...state.inventory, product]};
    case 'RemoveCart':
      changedProduct = removeOne(state.cart, product.name);
      return {...state, changedProduct};
    default:
      return state;
  }
} 

const removeOne = (products, choice) => {
  return products.filter(product => product.category !== choice);
}