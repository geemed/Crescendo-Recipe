import * as types from "./recipe.type";

const initialState = {
  data: [],
  recipe: {},
  specials: [],
  hasError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case types.HAS_ERROR:
      return Object.assign({}, state, {
        hasError: action.result,
      });
    case types.GET_RECIPES:
      return Object.assign({}, state, {
        data: action.result,
        hasError: false,
      });
    case types.GET_RECIPE_BY_ID:
      return Object.assign({}, state, {
        recipe: action.result,
        hasError: false,
      });
    case types.GET_SPECIALS:
      return Object.assign({}, state, {
        specials: action.result,
        hasError: false,
      });
  }
};

export default reducer;
