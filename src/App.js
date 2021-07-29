// App
// Importing Helpers
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Importing Styles
import "./App.css";

// Importing Components
import Homepage from "./Pages/Homepage";

// Functional Component
function App() {
  return (
    <>
      <Router>
        <Homepage />
      </Router>
    </>
  );
}

// Default Export
export default App;
