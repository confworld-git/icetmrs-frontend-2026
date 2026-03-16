import React, { useRef, useState } from "react";
import axios from "axios";

// Mock countries data
const countries = [
  { code: "US", name: "United States", emoji: "🇺🇸" },
  { code: "GB", name: "United Kingdom", emoji: "🇬🇧" },
  { code: "IN", name: "India", emoji: "🇮🇳" },
  { code: "CA", name: "Canada", emoji: "🇨🇦" },
  { code: "AU", name: "Australia", emoji: "🇦🇺" },
];

// Simple toast notification component
const Toast = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500 " : type === "warning" ? "bg-amber-500" : "bg-red-500";

  return (
    <div
  className={`fixed top-42 left-1/2 -translate-x-1/2 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50`}
>
      {message}
    </div>
  );
};

const OCMform = () => {
  const OCMRef = useRef();
  const [phoneValue, setPhoneValue] = useState("");
  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const HandleOCM = async (e) => {
    e.preventDefault();

    const formData = new FormData(OCMRef.current);
    
    // Add phone value to formData
    formData.set("Number", phoneValue);
    
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    const requiredFields = [
      "Title",
      "First_Name",
      "Email",
      "Country",
      "Number",
      "Member_Category",
      "Organization",
      "Qualification",
      "Professional_Experience",
      "Industry_Experience",
      "Department",
      "Specialization",
      "h_index",
      "Associated_Cerada",
      "Publication",
      "SCI_Published",
      "Journals",
      "Conference_Info",
      "file",
    ];

    for (const field of requiredFields) {
      const value = formValues[field];

      if (field === "file") {
        const fileInput = OCMRef.current.querySelector('input[name="file"]');
        const file = fileInput?.files?.[0];
        
        if (!file) {
          showToast("File is required.", "warning");
          return;
        }

        if (file.size > 300 * 1024) {
          showToast("File size must be less than 300KB.", "warning");
          return;
        }
      } else {
        if (!value || value.trim() === "") {
          showToast(`${field.replace(/_/g, " ")} is required.`, "warning");
          return;
        }
      }
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/committeeMember`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPhoneValue("");
      OCMRef.current.reset();
      showToast(response.data.message || "Form submitted successfully!", "success");
    } catch (error) {
      console.error("❌ Error:", error);
      showToast(error?.response?.data?.message || "Something went wrong", "danger");
    }
  };

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <div className="min-h-screen bg-white py-4 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 py-8 px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              Apply for Organizing Committee Members
            </h1>
            <p className="text-indigo-100 text-center mt-2">
              Please fill out all required fields marked with *
            </p>
          </div>

          {/* Form */}
          <form
            ref={OCMRef}
            onSubmit={HandleOCM}
            className="p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title <span className="text-amber-500">*</span>
                </label>
                <select
                  name="Title"
                  defaultValue=""
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                >
                  <option disabled value="">Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                  <option value="Prof">Prof</option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="First_Name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-amber-500">*</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp/Viber Contact Number <span className="text-amber-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phoneValue}
                  onChange={(e) => setPhoneValue(e.target.value)}
                  placeholder="+1 234 567 8900"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country <span className="text-amber-500">*</span>
                </label>
                <select
                  name="Country"
                  defaultValue=""
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                >
                  <option disabled value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.emoji} {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Member Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Member Category <span className="text-amber-500">*</span>
                </label>
                <select
                  name="Member_Category"
                  defaultValue=""
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                >
                  <option disabled value="">Select Member Category</option>
                  <option value="Advisory">Advisory</option>
                  <option value="Scientific">Scientific</option>
                  <option value="Hospitality">Hospitality</option>
                </select>
              </div>

              {/* Organization */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="Organization"
                  placeholder="University/Institute/College/Organization"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="Department"
                  placeholder="Your department"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Qualification */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Qualification <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="Qualification"
                  placeholder="Your highest qualification"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Professional Background */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Professional Background <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="Professional_Experience"
                  placeholder="Years of experience and roles"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Industry Background */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry Background <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="Industry_Experience"
                  placeholder="Industry experience details"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Area of Specialization */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Area of Specialization <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="Specialization"
                  placeholder="Your area of expertise"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Associated with CERADA */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Associated with CERADA <span className="text-amber-500">*</span>
                </label>
                <select
                  name="Associated_Cerada"
                  defaultValue=""
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                >
                  <option disabled value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* h-index */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  h-index <span className="text-amber-500">*</span>
                </label>
                <input
                  type="number"
                  name="h_index"
                  placeholder="Enter h-index value"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Scopus Publications */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  No. of Scopus Publications <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="Publication"
                  placeholder="Number of publications"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* SCI/WoS Publications */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  No. of SCI/WoS Publications <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="SCI_Published"
                  placeholder="Number of SCI/WoS publications"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Editor/Reviewer */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Editor/Reviewer in Journals <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="Journals"
                  placeholder="Journal names"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Upload CV */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload CV (PDF, DOC, DOCX) <span className="text-amber-500">*</span>
                </label>
                <input
                  type="file"
                  name="file"
                  accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700 file:font-semibold hover:file:bg-indigo-100"
                />
                <p className="text-sm text-gray-500 mt-1">Maximum file size: 300KB</p>
              </div>

              {/* Conference Info - Full Width */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How did you find out about the event? <span className="text-amber-500">*</span>
                </label>
                <textarea
                  name="Conference_Info"
                  rows="4"
                  placeholder="Please share how you learned about this event..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-indigo-700 hover:to-indigo-800 text-white hover:text-amber-400 font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Submit Application
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="bg-gradient-to-r from-amber-50 to-indigo-50 py-4 px-6 text-center">
            <p className="text-sm text-gray-600">
              All fields marked with <span className="text-amber-500 font-semibold">*</span> are required
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OCMform;