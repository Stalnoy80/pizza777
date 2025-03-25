import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <div className="block">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
