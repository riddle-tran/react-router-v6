import React, { useContext } from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { LoadingSpinner } from "./components";

// import { AppLoading } from "./components";
import { AuthContext } from "./context/AuthContext";

import {
  Home,
  Admin,
  SignIn,
  Invoice,
  Activity,
  ChildOne,
  ChildTwo,
  SentInvoices,
  User,
  Roles,
} from "./pages";

const DefaultComponent = () => {
  return <Navigate to={Routes.home.path} />;
};

export const Routes = {
  signIn: {
    path: "/SignIn",
    element: SignIn,
  },
  admin: {
    path: "/admin",
    element: Admin,
    isAuth: true,
    isAdmin: true,
    index: User,
    routes: {
      user: {
        path: "user",
        element: User,
        isAuth: true,
      },
      Roles: {
        path: "roles",
        element: Roles,
        isAuth: true,
      },
      default: {
        path: "*",
        element: DefaultComponent,
      },
    },
  },
  home: {
    path: "/",
    isAuth: true,
    element: Home,
    index: Activity,
    routes: {
      activity: {
        path: "activity",
        element: Activity,
        isAuth: true,
      },
      invoice: {
        path: "invoice",
        element: Invoice,
        isAuth: true,
      },
      sentInvoices: {
        path: "sentInvoices",
        element: SentInvoices,
        index: ChildOne,
        isAuth: true,
        routes: {
          activity: {
            path: "child-one",
            element: ChildOne,
            isAuth: true,
          },
          invoice: {
            path: "child-two",
            element: ChildTwo,
            isAuth: true,
          },
          default: {
            path: "*",
            element: DefaultComponent,
          },
        },
      },
      default: {
        path: "*",
        element: DefaultComponent,
      },
    },
  },
  default: {
    path: "*",
    element: DefaultComponent,
  },
};

export function AppLoading(props) {
  return <Route path={props.path} element={<LoadingSpinner />} />;
}

export function RouteComponentWrapper(route, key) {
  const { authState } = useContext(AuthContext);
  let location = useLocation();

  if (!authState.initialized)
    return (
      <Route key={key} path={location.pathname} element={<LoadingSpinner />} />
    );

  if (!authState.isAuth && route.isAuth)
    return (
      <Route
        key={key}
        path={route.path}
        element={
          <Navigate to={Routes.signIn.path} state={{ from: location }} />
        }
      />
    );

  if (!authState.isAdmin && route.isAdmin) {
    if (authState.isAuth) {
      return (
        <Route
          key={key}
          path={route.path}
          element={
            <Navigate to={Routes.home.path} state={{ from: location }} />
          }
        />
      );
    } else {
      return (
        <Route
          key={key}
          path={route.path}
          element={
            <Navigate to={Routes.signIn.path} state={{ from: location }} />
          }
        />
      );
    }
  }
  return (
    <Route path={route.path} element={<route.element />} key={key}>
      {route.index ? <Route index element={<route.index />} /> : undefined}
      {route.routes ? RenderRoutes(route.routes) : undefined}
    </Route>
  );
}

export function RenderRoutes(routes) {
  return Object.values(routes).map((route, index) => {
    return RouteComponentWrapper(route, index);
  });
}
