import { theme } from "./theme.js";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home.jsx";
import Products from "./views/Products/Products.jsx";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
