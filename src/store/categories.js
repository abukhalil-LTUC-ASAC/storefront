const initialState = {
  categories: {
    asa: {displayName: 'asap', description: 'data'},
  },
    activeCategory: {displayName: 'ajs', description: 'data'},
}


// Reducer
export default (state = initialState, action) => {

  const {type, payload} = action;
  switch(type) {

    case 'Change':
      let categories = state.categories;
      let activeCategory = categories[payload];
      return {activeCategory, categories};

    default:
      return state;

  }
}
