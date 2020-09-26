import React from "react";
import { Route, Switch } from "react-router";
import AnimeList from "./AnimeList/AnimeList";
import "./App.css";
import Grid from "./Grid/Grid";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/colorful-squares" component={Grid} />
          <Route exact path="/recipes" component={AnimeList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
