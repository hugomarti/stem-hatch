import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutUs from "./Pages/AboutUs";
import GenresPage from "./Pages/GenresPage";
import HomePage from "./Pages/HomePage";
import Tracks from "./Pages/Tracks";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/how-it-works" component={AboutUs} />
        <Route path="/tracks" component={Tracks} />
        <Route path="/genre/:genreId" component={GenresPage} />
      </Switch>
    </div>
  );
}

export default App;
