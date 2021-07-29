// App
// Importing Helpers
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Importing Styles
import "./App.css";

// Importing Components
import NavBarComponent from "./components/NavBarComponent";
import Sidebar from "./components/SideBarComponent";

// Functional Component
function App() {
  return (
    <Router>
      <Sidebar />
      <NavBarComponent />
    </Router>
  );
}

export default App;
