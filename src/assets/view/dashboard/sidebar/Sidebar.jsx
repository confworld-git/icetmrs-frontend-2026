import React from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoDocumentTextOutline,
  IoCallOutline,
  IoCloudDownloadOutline,
  IoMailOutline,
  IoTicketOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { toaster } from "evergreen-ui";

const Sidebar = ({ setIsMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/logout`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        navigate("/");
        toaster.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const isActive = (path) => {
    if (
      path === "/Dashboard" &&
      (location.pathname === "/" || location.pathname === "/Dashboard")
    ) {
      return true;
    }
    return location.pathname === path;
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Dashboard", path: "/Dashboard", icon: <IoHomeOutline /> },
    { name: "Registration Data", path: "/Dashboard/Registration", icon: <IoPersonOutline /> },
    { name: "Submissions", path: "/Dashboard/Submission", icon: <IoDocumentTextOutline /> },
    { name: "Committee", path: "/Dashboard/CommitteeMember", icon: <BsPeople /> },
    { name: "Coupons", path: "/Dashboard/CouponManagement", icon: <IoTicketOutline /> },
    { name: "Announcements", path: "/Dashboard/Enquiries", icon: <IoMailOutline /> },
    { name: "Brochure", path: "/Dashboard/Downloads", icon: <IoCloudDownloadOutline /> },
    { name: "Contacts", path: "/Dashboard/Contact", icon: <IoCallOutline /> },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white w-full h-full p-6 flex flex-col justify-between border-r border-gray-100 font-sans"
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-4 right-4 md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none transition-colors"
      >
        <FiX className="w-5 h-5" />
      </button>

      <div className="flex-1 mt-2 overflow-y-auto pr-2 custom-scrollbar">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-1.5"
        >
          {menuItems.map((item, index) => {
            const active = isActive(item.path);
            return (
              <motion.li key={index} variants={itemVariants}>
                <Link
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-[#eef3ff] text-blue-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </motion.li>
            );
          })}

       
         
        </motion.ul>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={() => {
            logout();
            handleLinkClick();
          }}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200 group"
        >
          <IoLogOutOutline className="text-lg group-hover:text-red-600" />
          <span>Log Out</span>
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
