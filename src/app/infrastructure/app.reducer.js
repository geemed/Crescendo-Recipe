import RecipeReducer from "app-component/recipe/recipe.reducer";

const createReducer = (reducerFn, reducerName) => {
  return (state, action) => {
    const { name } = action;
    const isInitiated = state === undefined;

    if (name !== reducerName && !isInitiated) return state;

    return reducerFn(state, action);
  };
};

const reducers = {
  recipe: createReducer(RecipeReducer, "recipe"),
};

export default reducers;
