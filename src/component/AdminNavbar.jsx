import React, { useState } from "react";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminNavbar({ sidebarToggle, setSidebarToggle }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center text-xl">
        <FaBars
          className="text-white me-2 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <span className="text-white font-mono font-bold hidden sm:block">CabDrive</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="text-white cursor-pointer">
          <FaBell className="w-6 h-6" />
        </div>
        <div className="relative" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <FaUserCircle className="w-6 h-6 text-white cursor-pointer" />
          {isDropdownOpen && (
            <div className="absolute top-full right-0 bg-white rounded-lg shadow p-2 mt-2">
              <ul className="py-2 text-sm text-black">
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
