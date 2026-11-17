import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toaster } from "evergreen-ui";
import {
  FiRefreshCw,
  FiTrendingUp,
  FiActivity,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiUsers,
  FiFileText,
  FiDownloadCloud,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const Dashboard = () => {
  const [allData, setData] = useState(null);
  const [INR, setINR] = useState(0);
  const [loading, setLoading] = useState(true);

  const dataGet = async () => {
    setLoading(true);
    try {
      const dashboardResponse = await axios.get(
        `${import.meta.env.VITE_API_URL}/dashboard`,
        { withCredentials: true }
      );

      if (dashboardResponse.status === 200) {
        setData(dashboardResponse.data);

        try {
          const exchangeRateResponse = await axios.get(
            "https://api.exchangerate-api.com/v4/latest/USD"
          );
          const rate = exchangeRateResponse.data.rates.INR;
          setINR(Math.round(dashboardResponse.data.totalFee * rate));
        } catch (err) {
          console.error("Exchange rate error", err);
        }
      }
    } catch (error) {
      console.error("Dashboard data fetch error:", error);
      toaster.danger("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataGet();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  if (loading) {
    return (
      <div className="p-8 w-full max-w-7xl mx-auto font-sans">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="h-8 bg-gray-200 rounded w-48 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 animate-pulse"></div>
          </div>
          <div className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-36 flex flex-col justify-between animate-pulse"
            >
              <div className="h-4 bg-gray-100 rounded w-1/2"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-50 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!allData) {
    return (
      <div className="flex flex-col justify-center items-center h-full min-h-[400px] text-red-600 font-sans">
        <p className="text-lg mb-4">Failed to load dashboard data.</p>
        <button
          onClick={dataGet}
          className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
        >
          Retry Load
        </button>
      </div>
    );
  }

  const kpiCards = [
    {
      title: "Total Registrations",
      value: allData?.Count_Registration || 0,
      badge: "+12%",
      badgeColor: "text-blue-600",
      bottomText: "Above target",
      bottomIcon: <FiTrendingUp className="mr-1.5" />,
      bottomColor: "text-blue-600",
    },
    {
      title: "Total Revenue",
      value: `$${allData?.totalFee || 0}`,
      badge: "Active",
      badgeColor: "text-red-500 text-[10px] uppercase font-bold",
      bottomText: "USD Payouts",
      bottomIcon: <FiDollarSign className="mr-1.5" />,
      bottomColor: "text-gray-500",
    },
    {
      title: "Total Submissions",
      value: allData?.Count_Submission || 0,
      badge: "-5%",
      badgeColor: "text-red-500",
      bottomText: "Avg. 24h response",
      bottomIcon: <FiClock className="mr-1.5" />,
      bottomColor: "text-gray-500",
    },
    {
      title: "Total Members",
      value: allData?.Count_CommitteeMember || 0,
      badge: "New",
      badgeColor: "text-green-500",
      bottomText: "High quality",
      bottomIcon: <FiCheckCircle className="mr-1.5" />,
      bottomColor: "text-gray-500",
    },
    {
      title: "Total Downloads",
      value: allData?.Count_Download || 0,
      badge: "",
      badgeColor: "",
      bottomText: "Files accessed",
      bottomIcon: <FiDownloadCloud className="mr-1.5" />,
      bottomColor: "text-gray-500",
    },
    {
      title: "Total Enquiries",
      value: allData?.Count_Enquiry || 0,
      badge: "",
      badgeColor: "",
      bottomText: "Active tickets",
      bottomIcon: <FiMail className="mr-1.5" />,
      bottomColor: "text-gray-500",
    },
    {
      title: "Total Contacts",
      value: allData?.Count_Contact || 0,
      badge: "",
      badgeColor: "",
      bottomText: "Network reach",
      bottomIcon: <FiPhone className="mr-1.5" />,
      bottomColor: "text-gray-500",
    },
  ];

  return (
    <div className="p-6 md:p-8 w-full max-w-[1400px] mx-auto font-sans bg-[#f4f6f8] min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gray-500">
            View and manage all conference participants and their registration status.
          </p>
        </div>
        <button
          onClick={dataGet}
          className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 text-blue-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
        >
          <FiRefreshCw className={loading ? "animate-spin" : ""} />
          <span>Refresh</span>
        </button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {kpiCards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-6 flex flex-col justify-between"
          >
            <h3 className="text-[13px] font-medium text-gray-500 mb-3">
              {card.title}
            </h3>
            <div className="flex items-baseline space-x-2 mb-4">
              <span className="text-3xl font-bold text-gray-900 tracking-tight">
                {card.value}
              </span>
              {card.badge && (
                <span className={`text-xs font-semibold ${card.badgeColor}`}>
                  {card.badge}
                </span>
              )}
            </div>
            <div
              className={`flex items-center text-[12px] font-medium ${card.bottomColor}`}
            >
              {card.bottomIcon}
              <span>{card.bottomText}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional: Add a subtle animated element to fill empty space or make it feel "live" */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-12 p-6 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center justify-between"
      >
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <FiActivity className="text-blue-600 text-lg" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">System Activity Normal</h4>
            <p className="text-xs text-gray-500">All services are currently operational.</p>
          </div>
        </div>
        <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </motion.div>
    </div>
  );
};

export default Dashboard;

