const initialState = {
  allCategories: {
    asa: {name:'ASAP', displayName: 'asa', description: 'data'},
    kpa: {name:'KPAP', displayName: 'kpa', description: 'Xa'},
    awr: {name:'AWER', displayName: 'awr', description: 'MP'},
    cdd: {name:'CDDD', displayName: 'cdd', description: 'Tre'},
  },
    activeCategory: {name:'choose-category', displayName: 'Choose a Category', description: 'Let\'s begin exploring'},
}


// Reducer
export default (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case 'ChangeCat':
      console.log(payload, state.allCategories[payload]);
      return {...state, activeCategory: state.allCategories[payload]};

    default:
      return state;
  }
}

// switch(type) {

//   case 'Change':
//     let categories = state.categories;
//     let activeCategory = categories[payload];
//     return {activeCategory, categories};

//   default:
//     return state;

// }