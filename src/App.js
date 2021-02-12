import React from "react";

import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
