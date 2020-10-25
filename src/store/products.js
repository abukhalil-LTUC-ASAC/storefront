const initialState = {
  products: [
    {category: 'Asa', name: 'Msa', description: 'psa', price: '123', inventory: 1},
  ],
  displayedProducts: []
}


// Reducer
export default (state = initialState, action) => {

  const {type, payload} = action;

  switch(type) {

    case 'Change':
      let displayedProducts = state.products.filter(product => {
        return product.category === payload;
      })
      return {...state, displayedProducts};

    default:
      return state;

  }
} 