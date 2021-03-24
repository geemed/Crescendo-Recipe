import React from "react";
import config from "app-config/config.json";
import { useHistory } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

const BASE_URL = `${config.baseApi}`;

const RecipeList = ({ item }) => {
  const history = useHistory();

  const handleGoTo = () => {
    history.push(`${item.uuid}`);
  };
  return (
    <Col xs={12} sm={6} md={3} className="recipe-col">
      <Card className="recipe-list">
        <Card.Img
          variant="top"
          src={`${BASE_URL}${item.images.medium}`}
          className="rounded-circle"
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Button variant="outline-info" size="sm" onClick={handleGoTo}>
            VIEW RECIPE
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RecipeList;
