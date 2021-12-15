import { useContext, useEffect } from "react";
import { Routes as RoutesDom } from "react-router-dom";

import { RenderRoutes, Routes } from "./Routes";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { authDispatch } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      authDispatch({ type: "initialize" });
    }, 2000);
  }, [authDispatch]);
  return <RoutesDom>{RenderRoutes(Routes)}</RoutesDom>;
}

export default App;
