import * as api from "app-service/base.service.js";

export const getRecipes = async () => {
  const result = await api.get("recipes");

  return result.data || [];
};

export const getSpecials = async () => {
  const result = await api.get("specials");

  return result.data || [];
};
