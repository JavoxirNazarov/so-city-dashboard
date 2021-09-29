import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext<{
  isSignedIn: boolean;
  logOut: () => void;
  logIn: () => void;
}>({ isSignedIn: false, logOut: () => {}, logIn: () => {} });

export function AuthContextProvider({ children }: any) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // const ID = localStorage.getItem("SECRET_ID");
    // const TOKEN = localStorage.getItem("SECRET_TOKEN");
    // const password = localStorage.getItem("PHONE");
    // const { access, expires } = await getAccessToken(password, ID, TOKEN);
    // if (access) {
    //   // Axios.defaults.headers.common.Authorization = `Bearer ${access}`;
    //   localStorage.setItem("ACCESS_TOKEN", access);
    //   setIsSigned(!!access);
    // }
  }, []);

  const logOut = () => {
    setIsSignedIn(false);
    history.push("/auth");
  };

  const logIn = () => {
    localStorage.clear();
    setIsSignedIn(true);
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
}
