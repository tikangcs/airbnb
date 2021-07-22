import React from "react";
import Landing from "./Landing";
import Listings from "./Listings";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/listings">
          <Listings />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
