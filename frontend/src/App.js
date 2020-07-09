import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import CustomNavbar from './components/Navbar/CustomNavbar';
import Home from './components/Home/Home';
import Authors from './components/Authors/Authors';
import Books from './components/Books/Books';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar></CustomNavbar>
        </div>
        <div className="body-part">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/authors" component={Authors} />
            <Route exact path="/books" component={Books} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
