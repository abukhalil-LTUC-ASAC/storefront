const initialState = {
  allCategories: [
    {name:'ASAP', display_name: 'asa', description: 'data'},
    {name:'KPAP', display_name: 'kpa', description: 'Xa'},
    {name:'AWER', display_name: 'awr', description: 'MP'},
    {name:'CDDD', display_name: 'cdd', description: 'Tre'},
  ],
    activeCategory: {name:'choose-category', display_name: 'Choose a Category', description: 'Let\'s begin exploring'},
}


// Reducer
export default (state = initialState, action) => {
  const {type, payload} = action;
  console.log("categories ----------> :", state);
  switch(type) {
    case 'GET.C': 
    return {...state, allCategories: payload.results};

    case 'ChangeCat':
      console.log("changing caat:       ....",payload, state.allCategories[payload]);
      return {...state, activeCategory: state.allCategories[payload[1]]};

    default:
      return state;
  }
}
