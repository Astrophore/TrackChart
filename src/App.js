import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router";
import { StockForm } from "./components/StockForm";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <Router>
        <Switch>
          <Route exact path="/" Component={StockForm} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
