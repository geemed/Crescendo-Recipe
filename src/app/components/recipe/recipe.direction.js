import React from "react";
import { ListGroup } from "react-bootstrap";

const RecipeDirection = ({ dir }) => {
  return (
    <ol type="1">
      {dir
        ? dir.map((item, idx) => {
            return (
              <li key={idx}>
                {item.instructions} <i>{item.optional ? "Optional" : ""}</i>
              </li>
            );
          })
        : null}
    </ol>
  );
};

export default RecipeDirection;
