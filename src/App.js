import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import dataForm from "./assets/dataform";
import Find from "./components/Find";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/about">
            <Find></Find>
          </Route>
          <Route path="/">
            <Form dataForm={dataForm}></Form>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
