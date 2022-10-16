import React, { useReducer } from "react";
import { AuthReducer } from "./reducer";

const LoginStateContext = React.createContext();
const LoginDispatchContext = React.createContext();

export const initialState = {
  bio: "",
  email: "",
  image: "",
  token: "",
  username: "",
};

export function useCurrentUser() {
  const context = React.useContext(LoginStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}

export function useLoginDispatch() {
  const context = React.useContext(LoginDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
}

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <LoginStateContext.Provider value={user}>
      <LoginDispatchContext.Provider value={dispatch}>{children}</LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
};
