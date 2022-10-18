import React, { useReducer } from "react";
import { AuthReducer } from "./reducer";

const LoginStateContext = React.createContext();

export const initialState = {
  bio: "",
  email: "",
  image: "",
  token: "",
  username: "",
};

export function useCurrentUser() {
  const context = React.useContext(LoginStateContext);
  const { user } = context;
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return user;
}

export function useLoginDispatch() {
  const context = React.useContext(LoginStateContext);
  const { dispatch } = context;
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return dispatch;
}

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return <LoginStateContext.Provider value={{ user, dispatch }}>{children}</LoginStateContext.Provider>;
};
