import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar showNav={showNav} setShowNav={setShowNav} />
        <Switch>
          <div
            className={`w-full h-[calc(100vh-5rem)] ${
              showNav ? "overflow-hidden" : ""
            }`}
          >
            <Route path="/product" exact component={Product} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
