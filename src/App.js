import React from "react";
import Landing from "./Landing";
import Listings from "./Listings";
import Test from "./Test.jsx";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
