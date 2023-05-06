import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import MainPage from "./pages/MainPage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        {/* /Login/repositories */}
        <Route path="/" element={<MainPage />} />
      </Switch>
    </Router>
  );
}
