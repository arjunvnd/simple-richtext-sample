import React, { useEffect } from "react";

import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import { connect } from "react-redux";
import { intialiseState } from "./redux/actions/basic";
import { sampleData } from "./config/sample-data";

function App({ ebookData, loadIntialData }) {
  useEffect(() => {
    if (ebookData.length === 0) {
      const eBookData = localStorage.getItem("ebookData");
      if (eBookData) {
        loadIntialData(JSON.parse(eBookData));
      } else {
        localStorage.setItem("ebookData", JSON.stringify(sampleData));
        loadIntialData(sampleData);
      }
    } else {
      localStorage.setItem("ebookData", JSON.stringify(ebookData));
    }
  }, [ebookData]);

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

const mapStateToProps = (state) => ({
  ebookData: state.ebookData,
});

const mapDispatchToProps = (dispatch) => ({
  loadIntialData: (data) => dispatch(intialiseState(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
