import config from "app-config/config.json";
import { useParams, useHistory } from "react-router-dom";
import { Card, Button, ListGroup, Row, Col, Container } from "react-bootstrap";
import React, { useEffect, useCallback, Fragment } from "react";

import { useSelector, useDispatch } from "app-base/app.context";
import RecipeIngredient from "./recipe.ingredient";
import RecipeDirection from "./recipe.direction";

import * as actions from "./recipe.action";
const BASE_URL = `${config.baseApi}`;

const RecipeItem = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { uuid } = useParams();
  const { data, recipe, specials } = useSelector((state) => state.recipe);

  const getRecipeById = useCallback(() => {
    const result = actions.getSpecialsByRecipeId(specials, data, uuid);

    dispatch(result);
  });

  const getRecipesData = useCallback(async () => {
    if (data && data.length) return;

    const res = await actions.getRecipes();

    dispatch(res);
  });

  const getRecipesSpecial = useCallback(async () => {
    const res = await actions.getSpecials();

    dispatch(res);
  });

  useEffect(() => {
    getRecipesData();
    getRecipesSpecial();
  }, []);

  useEffect(() => {
    if (data && data.length && specials && specials.length) getRecipeById();
  }, [data, specials]);

  const handleBack = () => {
    history.goBack();
  };

  const renderRecipe = () => {
    return (
      <Fragment>
        <Button variant="outline-info" size="sm" onClick={handleBack}>
          Back
        </Button>
        <hr />
        <div className="item-header-menu">
          <h1>{(recipe || {}).title}</h1>
          <span>
            <ListGroup horizontal>
              <ListGroup.Item>
                <i className="fa fa-clock-o"></i>
                <span>{(recipe || {}).cookTime} min. cook time</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fa fa-users"></i>
                <span>{(recipe || {}).servings} servings</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fa fa-clock-o"></i>
                <span>{(recipe || {}).prepTime} min. prep time</span>
              </ListGroup.Item>
            </ListGroup>
          </span>
        </div>
        <hr />
        <Card className="recipe-item">
          <Card.Img
            variant="top"
            src={`${BASE_URL}${((recipe || {}).images || {}).full}`}
          />
          <Card.Body>
            <Card.Text>
              <span>{(recipe || {}).description}</span>
            </Card.Text>
            <hr />
            <Container fluid className="container-recipe">
              <Row>
                <Col>
                  <h3>Ingredients</h3>
                  <RecipeIngredient ing={recipe.ingredients} />
                </Col>
                <Col>
                  <h3>Directions</h3>
                  <RecipeDirection dir={recipe.directions} />
                </Col>
              </Row>
              <Row>
                <Col></Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Fragment>
    );
  };

  return <div className="recipe">{renderRecipe()}</div>;
};

export default RecipeItem;
