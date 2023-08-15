import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import axios from "axios";
import React from "react";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AdressPage from "./pages/AdressPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/adress" element={<AdressPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/products" element={<ProductPage />} />

        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
