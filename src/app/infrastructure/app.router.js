import React from "react";
import { Router, Route } from "react-router-dom";

import History from "./app.history";
import { Home, Recipe, RecipeItem } from "app-component";

const Routes = () => {
  return (
    <Router history={History}>
      <Home>
        <Route path="/" exact>
          <Recipe />
        </Route>
        <Route path="/:uuid" exact>
          <RecipeItem />
        </Route>
      </Home>
    </Router>
  );
};

export default Routes;
