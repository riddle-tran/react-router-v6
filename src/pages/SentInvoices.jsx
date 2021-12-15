import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Routes } from "../Routes";

function SentInvoices() {
  return (
    <>
      <div>SentInvoices</div>
      <div>
        {Object.values(Routes.home.routes.sentInvoices.routes).map(
          (route, index) =>
            route.path !== "*" ? (
              <div key={index}>
                <Link to={route.path}>{route.path}</Link>
              </div>
            ) : undefined
        )}
      </div>
      <Outlet />
      <div>End</div>
    </>
  );
}
export default SentInvoices;
