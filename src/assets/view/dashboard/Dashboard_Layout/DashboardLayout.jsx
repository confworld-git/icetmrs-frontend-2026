import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FiSearch, FiMenu } from "react-icons/fi";
import Sidebar from "../sidebar/Sidebar";

const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#f4f6f8] font-sans">
      {/* Top Navbar */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center shrink-0 z-20">
        {/* Logo Section (matches sidebar width on desktop) */}
        <div className="w-[260px] h-full flex items-center justify-between px-6 border-r border-gray-100 shrink-0">
          <Link to="/" className="flex items-center">
            <img src="/images/logo/icetmrslogo1.png" alt="ICETMRS" className="h-8 object-contain" />
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar Section */}
        <div className="flex-1 flex justify-center px-6">
          <div className="relative w-full max-w-xl hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400 w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search data, submissions..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-100 rounded-full leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-300 sm:text-sm transition-all duration-200"
            />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className={`absolute md:static top-0 left-0 z-10 h-full bg-white shadow-xl md:shadow-none transition-transform duration-300 ease-in-out shrink-0 w-[260px] ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <Sidebar setIsMenuOpen={setIsMenuOpen} />
        </aside>

        {/* Overlay for mobile when sidebar is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-0 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto relative w-full">
          <div className="pb-12">
            <Outlet />
          </div>
          
          {/* Footer inside main content as seen in reference */}
          <div className="px-8 py-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-auto bg-[#f4f6f8]">
            <div>
              <p className="font-semibold text-gray-700 mb-1">ICETMRS Admin Portal</p>
              <p>© 2026 ICETMRS. All rights reserved. International Conference on Engineering, Technology, Management and Research in Sciences.</p>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-blue-600">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600">Terms of Service</a>
              <a href="#" className="hover:text-blue-600">Contact Support</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

