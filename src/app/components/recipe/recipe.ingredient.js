import React from "react";

const RecipeIngredient = ({ ing }) => {
  return (
    <ul>
      {ing
        ? ing.map((item, idx) => {
            return (
              <li key={idx}>
                {`${(item || {}).amount}
                    ${(item || {}).measurement} 
                    ${(item || {}).name}`}
                {item.hasSpecial ? (
                  <ul>
                    <li>
                      {item.title} - {item.text}
                    </li>
                  </ul>
                ) : null}
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default RecipeIngredient;
