const initialState = {
  allProducts: [
    {category: 'asa', name: 'asaAff', description: 'psa', price: '123', inventory: 1},
    {category: 'kpa', name: 'kpaAff', description: 'psa', price: '123', inventory: 1},
    {category: 'kpa', name: 'kpaAff', description: 'psa', price: '123', inventory: 1},
    {category: 'asa', name: 'asaAff', description: 'psa', price: '123', inventory: 1},
  ],
  displayedProducts: []
}


// Reducer
export default (state = initialState, action) => {

  const {type, payload} = action;

  switch(type) {

    case 'Change':
      let displayedProducts = filterProducts(state.allProducts, payload);
      return {...state, displayedProducts};

    default:
      return state;

  }
} 

const filterProducts = (products, choice) => {
  return products.filter(product => product.category === choice);
}