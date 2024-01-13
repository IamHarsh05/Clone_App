import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./Auh/AuthProvider";
import Login from "./Components/Login/login";
import Home from "./Components/Home/home";

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {!isLoggedIn ? (
          <Route path="*" element={<Navigate to="/login" replace />} />
        ) : (
          <Route
            path="/"
            element={
              <Home/>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
