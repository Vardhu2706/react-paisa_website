// App
// Importing Helpers
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importing Styles
import "./App.css";

// Importing Components/Pages
import Homepage from "./Pages/Homepage";
import SignInPage from "./Pages/SignInPage";

// Functional Component
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/signin" component={SignInPage} exact />
        </Switch>
      </Router>
    </>
  );
}

// Default Export
export default App;

//3:21
