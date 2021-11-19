import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  // dispatch is the function that we will use to dispatch actions (Start Login, succes, failure etc)
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
};

// children is the component that is wrapped in the context provider. This is the component that will use the context. In this case, the component that is using the context is our application (App.js)
return <AuthContext.Provider>{children}</AuthContext.Provider>;
