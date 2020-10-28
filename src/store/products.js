const initialState = {
  allProducts: [
    {category: 'asa', name: 'asaAff1', description: 'psa', price: '123', inventory: 3, cart: 0},
    {category: 'kpa', name: 'kpaAff2', description: 'psa', price: '123', inventory: 12, cart: 0},
    {category: 'kpa', name: 'kpaAff3', description: 'psa', price: '123', inventory: 1, cart: 0},
    {category: 'asa', name: 'asaAff4', description: 'psa', price: '123', inventory: 41, cart: 0},
  ],
  displayedProducts: []
}


// Reducer
export default (state = initialState, action) => {

  const {type, payload, product} = action;
  let changedProduct;
  console.log(payload);
  console.log("products ----------> :", state);

  switch(type) {
    case 'ChangeCat':
      let displayedProducts = filterProductsCat(state.allProducts, payload);
      return {...state, displayedProducts};

    case 'AddCart':
        if (product.inventory > 0) {
          let allProducts = incrementDecrement(state.allProducts, product.name, true);
        return {...state, allProducts};
        }
        return {...state}

    case 'RemoveCart':
      if (product.cart > 0) {
        let allProducts = incrementDecrement(state.allProducts, product.name, false);
        return {...state, allProducts};
      }

    default:
      return state;
  }
} 

const filterProductsCat = (products, choice) => {
  return products.filter(product => product.category === choice);
}

const incrementDecrement = (products, name, boolean) => {
  return products.map((product) => {
    if (product.name === name) {
      if (boolean) {
        product.inventory--;
        product.cart++;
        return product;
      } else {
        product.inventory++;
        product.cart--;
        return product;
      } 
    } else {
      return product;
    };
  });
}