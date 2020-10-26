const initialState = {
  allProducts: [
    {category: 'asa', name: 'asaAff1', description: 'psa', price: '123', inventory: 3},
    {category: 'kpa', name: 'kpaAff2', description: 'psa', price: '123', inventory: 12},
    {category: 'kpa', name: 'kpaAff3', description: 'psa', price: '123', inventory: 1},
    {category: 'asa', name: 'asaAff4', description: 'psa', price: '123', inventory: 41},
  ],
  displayedProducts: []
}


// Reducer
export default (state = initialState, action) => {

  const {type, payload, product} = action;
  let changedProduct;
  console.log(payload);
  switch(type) {
    case 'ChangeCat':
      let displayedProducts = filterProductsCat(state.allProducts, payload);
      return {...state, displayedProducts};
    case 'AddCart':
        if (product.inventory > 0) changedProduct = filterProductsOne(state.allProducts, product.name)[0].inventory--;
      return {...state, changedProduct};
    case 'RemoveCart':
      changedProduct = filterProductsOne(state.allProducts, product.name)[0].inventory++;
      return {...state, changedProduct};
    default:
      return state;
  }
} 

const filterProductsCat = (products, choice) => {
  return products.filter(product => product.category === choice);
}

const filterProductsOne = (products, name) => {
  return products.filter(product => product.name === name);
}