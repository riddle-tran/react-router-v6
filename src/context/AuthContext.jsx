import React from "react";

export const AuthInitialState = {
  isAuth: false,
  isAdmin: false,
  initialized: true,
};

export const authReducer = (prevState, action) => {
  switch (action.type) {
    case "initialize":
      return { ...prevState, initialized: true };
    case "signIn":
      return { ...prevState, initialized: true, isAuth: action.isAuth };
    case "signInAsAdmin":
      return { ...prevState, initialized: true, isAuth:action.isAuth, isAdmin: action.isAdmin };
    case "signOut":
      return { ...prevState, initialized: true, isAdmin: false, isAuth: false };
    default:
      throw new Error("Unexpected action");
  }
};

export const AuthContext = React.createContext({
  authState: AuthInitialState,
  authDispatch: () => {},
});

export const AuthProvider = (props) => {
  const [authState, authDispatch] = React.useReducer(
    authReducer,
    AuthInitialState
  );

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
