import React from "react";
import { Outlet } from "react-router";
import DashboardNavbar from "../../components/navbar/DashboardNavbar";

const DashboardWrapper = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="px-5 md:px-40">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardWrapper;
