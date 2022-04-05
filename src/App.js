import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "react-bootstrap";
import "./App.css";
import React from "react";
import {Router} from "react-router-dom";

function App() {
  return(
  <ThemeProvider>
  <Router />
  </ThemeProvider>
)
}

export default App;
