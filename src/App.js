import React from "react";
import SingIn from "./features/SingIn";
import Catalog from "./features/Catalog";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
