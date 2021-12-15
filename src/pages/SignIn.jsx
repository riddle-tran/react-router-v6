import React, { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Routes } from "../Routes";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { authState, authDispatch } = useContext(AuthContext);

  const handleHomeSubmit = useCallback(
    (event) => {
      event.preventDefault();
      authDispatch({ type: "signIn", isAuth:true });
    },
    [authDispatch]
  );

  const handleAdminSubmit = useCallback(
    (event) => {
      event.preventDefault();
      authDispatch({ type: "signInAsAdmin", isAdmin: true });
    },
    [authDispatch]
  );

  useEffect(() => {
    if (authState.isAdmin) {
      navigate(Routes.admin.path, { replace: true });
    } else if (authState.isAuth) {
      navigate(Routes.home.path, { replace: true });
    }
  }, [authState, navigate]);

  return (
    <div>
      SignIn
      <form onSubmit={handleHomeSubmit}>
        <button type="submit">SignIn</button>
      </form>
      <form onSubmit={handleAdminSubmit}>
        <button type="submit">SignIn as Admin</button>
      </form>
    </div>
  );
};

export default SignIn;
