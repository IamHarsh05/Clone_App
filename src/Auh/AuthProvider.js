import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loggedIn } from "../Components/Login/loginSlice";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {  
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isloggedIn.isLoggedIn);
  // const isLoggedIn = false;

  const login = () => {
    dispatch(loggedIn(true))
  };

  const logout = () => {
    dispatch(loggedIn(false))
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
