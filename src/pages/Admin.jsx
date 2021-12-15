import React, { useCallback, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { Routes } from "../Routes";
import { AuthContext } from "../context/AuthContext";

function Admin() {
  const {  authDispatch } = useContext(AuthContext);

  const handleSignOut = useCallback(
    (event) => {
      event.preventDefault();
      authDispatch({ type: "signOut"});
    },
    [authDispatch]
  );

  return (
    <>
     <form onSubmit={handleSignOut}>
        <button type="submit">SignOut</button>
      </form>
      <div>
        {Object.values(Routes.admin.routes).map((route, index) =>
          route.path !== "*" ? (
            <div key={index}>
              <Link to={route.path}>
                {route.path}
              </Link>
            </div>
          ) : undefined
        )}
      </div>
      <hr/>
      <div>Admin</div>
      <Outlet/>
      <div>End</div>
    </>
  );
}

export default Admin;
