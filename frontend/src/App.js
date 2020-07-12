import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Home from "./components/Home/Home";
import Authors from "./components/Authors/Authors";
import Books from "./components/Books/Books";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar></CustomNavbar>
      </div>
      <Container style={{ marginTop: "20px" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/authors" component={Authors} />
          <Route exact path="/books" component={Books} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
