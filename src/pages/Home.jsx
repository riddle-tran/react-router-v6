import React, { useCallback, useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const {  authDispatch } = useContext(AuthContext);

  const handleSignOut = useCallback(
    (event) => {
      event.preventDefault();
      authDispatch({ type: "signOut" });
    },
    [authDispatch]
  );

  return (
    <>
     <form onSubmit={handleSignOut}>
        <button type="submit">SignOut</button>
      </form>
      <div>Home</div>
      <Outlet/>
      <div>End</div>
    </>
  );
}

export default Home;
