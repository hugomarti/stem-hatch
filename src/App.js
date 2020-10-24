import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/how-it-works" component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
