import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export const AuthContext = createContext<
  Partial<{
    isSignedIn: boolean;
    setIsSignedIn: Dispatch<SetStateAction<boolean>>;
  }>
>({});

export function AuthContextProvider({ children }: any) {
  const [isSignedIn, setIsSignedIn] = useState(true);

  useEffect(() => {
    const ID = localStorage.getItem("SECRET_ID");
    const TOKEN = localStorage.getItem("SECRET_TOKEN");
    const password = localStorage.getItem("PHONE");

    // const { access, expires } = await getAccessToken(password, ID, TOKEN);

    // if (access) {
    //   // Axios.defaults.headers.common.Authorization = `Bearer ${access}`;
    //   localStorage.setItem("ACCESS_TOKEN", access);

    //   setIsSigned(!!access);
    // }
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
