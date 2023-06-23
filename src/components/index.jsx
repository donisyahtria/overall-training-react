/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./Movie/Header";
import { SideBar } from "./Movie/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header isShow={showSidebar} sidebar={() => setShowSidebar((prev) => !prev)} />
      <div>
        <div>
          <SideBar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
