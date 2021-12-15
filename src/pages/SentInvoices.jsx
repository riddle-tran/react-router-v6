import React from "react";
import { Outlet } from "react-router-dom";

function SentInvoices() {
  return (
    <>
      <div>SentInvoices</div>
      <Outlet />
      <div>End</div>
    </>
  );
}
export default SentInvoices;
