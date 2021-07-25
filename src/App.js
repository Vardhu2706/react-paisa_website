// App
// Importing Helpers
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Importing Styles
import "./App.css";

// Importing Components
import NavBarComponent from "./components/Navbar/NavBarComponent";

// Functional Component
function App() {
  return (
    <Router>
      <NavBarComponent />
    </Router>
  );
}

export default App;
