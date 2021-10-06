import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/product" exact component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
