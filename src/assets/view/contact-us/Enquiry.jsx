import React, { useRef } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { toaster } from "evergreen-ui";
import axios from "axios";

const Enquiry = ({ setPopup }) => {
  const EnquiryRef = useRef();

  const HandleEnquiryData = async (e) => {
    e.preventDefault();
    const formData = new FormData(EnquiryRef.current);
    const EnquiryData = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/enquiry`,
        EnquiryData
      );
      if (response) {
        EnquiryRef.current.reset();
        setPopup(false);
        toaster.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toaster.danger("Something's Wrong");
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={() => setPopup(false)}
      ></div>

      {/* Slide-in Panel */}
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl animate-slideInRight overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-indigo-700 p-6 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Enquiry Form</h1>
              <p className="text-indigo-100 text-sm mt-1">
                We'll get back to you soon
              </p>
            </div>
            <button
              onClick={() => setPopup(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:rotate-90 duration-300"
              aria-label="Close"
            >
              <HiMiniXMark size={24} />
            </button>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full opacity-10 blur-3xl -z-10"></div>

        {/* Form Content */}
        <div className="p-6">
          <form
            ref={EnquiryRef}
            onSubmit={HandleEnquiryData}
            className="space-y-5"
          >
            {/* User Name */}
            <div className="group">
              <label className="block text-sm font-semibold text-indigo-600 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  required
                  name="User_Name"
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-sm font-semibold text-indigo-600 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  required
                  name="Email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>
            </div>

            {/* Contact Number */}
            <div className="group">
              <label className="block text-sm font-semibold text-indigo-600 mb-2">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="Contact_Number"
                  required
                  placeholder="+14155552671"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Include country code (e.g., +1 for USA)
              </p>
            </div>

            {/* Preferred Contact Time */}
            <div className="group">
              <label className="block text-sm font-semibold text-indigo-600 mb-2">
                Preferred Contact Time <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  required
                  name="Preferred_Contact_Time"
                  placeholder="Morning, Afternoon or Evening"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="group">
              <label className="block text-sm font-semibold text-indigo-600 mb-2">
                Subject of Enquiry
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="Subject"
                  placeholder="What's this about?"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>
            </div>

            {/* Message */}
            <div className="group">
              <label className="block text-sm font-semibold text-indigo-600 mb-2">
                Message
              </label>
              <textarea
                rows={3}
                name="Message"
                placeholder="Tell us more about your enquiry..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition resize-none"
              ></textarea>
            </div>

            {/* Help Description */}
            <div className="group">
              <label className="block text-sm font-semibold text-indigo-600 mb-2">
                How Can We Help You?
              </label>
              <textarea
                rows={3}
                name="Help_Description"
                placeholder="Describe how we can assist you..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Send Message
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-amber-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gradient-to-r from-indigo-50 to-amber-50 border-t border-gray-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-indigo-600 mb-1">
                Need Immediate Help?
              </h3>
              <p className="text-sm text-gray-600">
                Call us directly at{" "}
                <a
                  href="tel:+918610656424"
                  className="text-indigo-600 font-semibold hover:text-amber-400 transition"
                >
                  +91 8610656424
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Enquiry;
