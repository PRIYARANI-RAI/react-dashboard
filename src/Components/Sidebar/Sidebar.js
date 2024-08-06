import React, { useState } from "react";
import Logo from "../assests/logo.png";
import "./Sidebar.css";
import { SidebarData } from "../Data/data.js";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="Sidebar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <span></span>
        </div>

        {/* Menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}>
                <item.icon />
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
