// App
// Importing Helpers
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Importing Styles
import "./App.css";

// Importing Components
import NavbarSidebarContainer from "./components/NavbarSidebarContainer";

// Functional Component
function App() {
  return (
    <Router>
      <NavbarSidebarContainer />
    </Router>
  );
}

// Default Export
export default App;
