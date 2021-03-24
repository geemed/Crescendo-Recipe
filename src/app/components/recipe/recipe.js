import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "app-base/app.context";
import { Col, Row } from "react-bootstrap";

import RecipeList from "./recipe.list";

import * as actions from "./recipe.action";

const Recipe = () => {
  const recipe = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const { data } = recipe;

  const getRecipesData = useCallback(async () => {
    if (data && data.length) return;

    const res = await actions.getRecipes();

    dispatch(res);
  });

  useEffect(() => {
    getRecipesData();
  }, []);

  const renderRecipes = () => {
    if (!data.length)
      return (
        <Row>
          <Col></Col>
        </Row>
      );

    return (
      <Row>
        {data.map((item, idx) => {
          return <RecipeList key={idx} item={item} />;
        })}
      </Row>
    );
  };

  return <div className="recipes">{renderRecipes()}</div>;
};

export default Recipe;
