import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Sidebar from "../components/sidebar/sidebar";

const RootLayout = () => {
 
  return (
    <div>
        <div>
          <Sidebar />
          <div >
            <Outlet />
          </div>
        </div>
    </div>
  );
};

export default RootLayout;