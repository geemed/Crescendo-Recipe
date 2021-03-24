import _ from "lodash";

import * as service from "./recipe.service";
import * as types from "./recipe.type";

const action = (result, type) => ({
  type,
  result,
  name: "recipe",
});

export const getRecipes = async () => {
  try {
    const result = await service.getRecipes();

    return action(result, types.GET_RECIPES);
  } catch (e) {
    return action(true, types.HAS_ERROR);
  }
};

export const getRecipeById = async (recipes, recipeId) => {
  try {
    const result = recipes.find((s) => s.uuid == recipeId);

    return action(result, types.GET_RECIPE_BY_ID);
  } catch (e) {
    return action(true, types.HAS_ERROR);
  }
};

export const getSpecials = async () => {
  try {
    const result = await service.getSpecials();

    return action(result, types.GET_SPECIALS);
  } catch (e) {
    return action(true, types.HAS_ERROR);
  }
};

export const getSpecialsByRecipeId = (specials, recipes, recipeId) => {
  try {
    const result = recipes.find((s) => s.uuid === recipeId);

    result.ingredients = result.ingredients.map((s) => {
      const special = specials.find((a) => a.ingredientId === s.uuid);

      return Object.assign({ hasSpecial: !!special }, special, s);
    });

    return action(result, types.GET_RECIPE_BY_ID);
  } catch (e) {
    return action(true, types.HAS_ERROR);
  }
};
