import * as React from "react";
import { Route, Switch } from "react-router-dom";

// import { AppRoute } from "./sharedComponents/Routes/AppRoute";

import MainPage from "./pages/MainPage";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} />

      {/* <Route component={Page404} /> */}
    </Switch>
  );
};
