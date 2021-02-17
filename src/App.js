import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import Sort from "./pages/Sort/Sort";
import Search from "./pages/Search/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sort">
          <Sort />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
