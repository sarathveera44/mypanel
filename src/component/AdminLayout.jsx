import React, { useState } from "react";
import AdminSidebar from "../component/AdminSidebar";
import AdminNavbar from "../component/AdminNavbar";

const AdminLayout = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <div className="flex">
      <AdminSidebar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarToggle ? "ml-0" : "ml-48"
        }`}
      >
        <AdminNavbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
