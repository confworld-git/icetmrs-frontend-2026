import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Hero from "../../components/common/common-hero/common-hero";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { Helmet } from "react-helmet";

const AbstractFullPaperSubmission = () => {
  
  const SubmissionRef = useRef();
  const [mobile, setMobile] = useState("");

  const generateSubmissionID = () => {
    const Random = Math.floor(Math.random() * 900) + 100;
    return `ICETMRS2026_TR_${Random}`;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const maxFileSize = 3 * 1024 * 1024;

      const allowedFileTypes = [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedFileTypes.includes(file.type)) {
        toaster.warning(
          "Invalid file type. Please upload a .doc or .docx file."
        );
        event.target.value = "";
        return;
      }

      if (file.size > maxFileSize) {
        toaster.warning(
          "File size exceeds the 300KB limit. Please upload a smaller file."
        );
        event.target.value = "";
        return;
      }
    }
  };

  const HandleSubmission = async (e) => {
    e.preventDefault();
    const newSubmissionID = generateSubmissionID();

    const formData = new FormData(SubmissionRef.current);

    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    formValues["SubmissionID"] = newSubmissionID;
    formValues["mobileNumber"] = mobile;

    const requiredFields = [
      "Submission_type",
      "paper_title",
      "authorName",
      "CoAuthorName",
      "correspondingEmail",
      "whatsappNumber",
      "presentationCategory",
      "presentationType",
      "Institution_Name",
      "Department",
      "designation",
      "Publication_Required",
      "file",
      "conferenceSource",
    ];

    for (const field of requiredFields) {
      const value = formValues[field];

      if (field === "file") {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          toaster.warning("File is required.");
          return;
        }
      } else if (!mobile || mobile.trim() === "") {
        toaster.warning("Mobile number is required.");
        return;
      } else {
        if (!value || value.trim() === "") {
          toaster.warning(`${field.replace(/_/g, " ")} is required.`);
          return;
        }
      }
    }

    const formDataToSend = new FormData();
    formDataToSend.append("SubmissionID", newSubmissionID);
    formDataToSend.append("mobileNumber", mobile);
    formData.forEach((value, key) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/paperSubmission`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      SubmissionRef.current.reset();
      setMobile("");
      toaster.success(response.data.message);
    } catch (error) {
      toaster.danger("Something's wrong");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-amber-50">
      <Hero
        title="Paper Submission"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/8.webp"
      />
      
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12" >
            
            
            <h1
              className="
text-4xl md:text-5xl font-bold text-indigo-900 mb-4
"
            >
              Abstract/Full Paper Submission
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Submit your research paper for review. Please ensure all required fields are completed accurately.
            </p>
          </div>

          {/* Form Section */}
          <div 
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-amber-400"
          >
            <form
              ref={SubmissionRef}
              onSubmit={HandleSubmission}
              className="p-8 md:p-12 space-y-8"
            >
              {/* Submission Type */}
              <div className="pb-6 border-b border-gray-200">
                <label className="block text-indigo-900 font-bold text-lg mb-4">
                  Submission Type <span className="text-amber-500">*</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="Submission_type" 
                      value="Abstract"
                      className="w-5 h-5 text-indigo-600 focus:ring-amber-400 focus:ring-2"
                    />
                    <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">Abstract</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="Submission_type" 
                      value="Full paper"
                      className="w-5 h-5 text-indigo-600 focus:ring-amber-400 focus:ring-2"
                    />
                    <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">Full Paper</span>
                  </label>
                </div>
              </div>

              {/* Paper Title & Author Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-indigo-900 font-semibold mb-2">
                    Title of the Paper <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="paper_title"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="Enter paper title"
                  />
                </div>
                <div>
                  <label className="block text-indigo-900 font-semibold mb-2">
                    Author Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="authorName"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="Enter author name"
                  />
                </div>
              </div>

              {/* Co-author Names */}
              <div>
                <label className="block text-indigo-900 font-semibold mb-2">
                  Co-author Names
                </label>
                <input
                  type="text"
                  name="CoAuthorName"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all"
                  placeholder="Enter co-author names (comma separated)"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-indigo-900 font-semibold mb-2">
                  Corresponding Author Email <span className="text-amber-500">*</span>
                </label>
                <input
                  type="email"
                  name="correspondingEmail"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all"
                  placeholder="author@example.com"
                />
              </div>

              {/* Contact Numbers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-indigo-900 font-semibold mb-2">
                    Mobile Number (With Country Code) <span className="text-amber-500">*</span>
                  </label>
                  <PhoneInput
                    defaultCountry="US"
                    value={mobile}
                    onChange={setMobile}
                    className="phone-input-custom"
                  />
                </div>
                <div>
                  <label className="block text-indigo-900 font-semibold mb-2">
                    WhatsApp/Viber Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="Enter WhatsApp number"
                  />
                </div>
              </div>

              {/* Social Media Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-indigo-900 font-semibold mb-2">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    name="linkedinURL"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
                <div>
                  <label className="block text-indigo-900 font-semibold mb-2">
                    Facebook URL
                  </label>
                  <input
                    type="url"
                    name="facebookURL"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="https://facebook.com/..."
                  />
                </div>
              </div>

              {/* Presentation Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-200">
                <div>
                  <label className="block text-indigo-900 font-semibold mb-3">
                    Presentation Category <span className="text-amber-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="presentationCategory" 
                        value="oral"
                        className="w-5 h-5 text-indigo-600 focus:ring-amber-400 focus:ring-2"
                      />
                      <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">Oral</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="presentationCategory"
                        value="poster"
                        className="w-5 h-5 text-indigo-600 focus:ring-amber-400 focus:ring-2"
                      />
                      <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">Poster</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-indigo-900 font-semibold mb-3">
                    Presentation Type <span className="text-amber-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="presentationType" 
                        value="Virtual"
                        className="w-5 h-5 text-indigo-600 focus:ring-amber-400 focus:ring-2"
                      />
                      <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">Virtual</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="presentationType" 
                        value="Physical"
                        className="w-5 h-5 text-indigo-600 focus:ring-amber-400 focus:ring-2"
                      />
                      <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">Physical</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Institution Details */}
              <div>
                <label className="block text-indigo-900 font-semibold mb-2">
                  University/Institution Name <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="Institution_Name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all"
                  placeholder="Enter institution name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-indigo-900 font-semibold mb-2">
                    Department <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="Department"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="Enter department"
                  />
                </div>
                <div>
                  <label className="block text-indigo-900 font-semibold mb-2">
                    Designation <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="designation"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all"
                    placeholder="Enter designation"
                  />
                </div>
              </div>

              {/* Publication Required */}
              <div className="pb-6 border-b border-gray-200">
                <label className="block text-indigo-900 font-semibold mb-3">
                  Publication Required <span className="text-amber-500">*</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="Publication_Required" 
                      value="yes"
                      className="w-5 h-5 text-indigo-600 focus:ring-amber-400 focus:ring-2"
                    />
                    <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">Yes</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="Publication_Required" 
                      value="no"
                      className="w-5 h-5 text-indigo-600 focus:ring-amber-400 focus:ring-2"
                    />
                    <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">No</span>
                  </label>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-indigo-900 font-semibold mb-2">
                  File Upload <span className="text-amber-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".doc,.docx"
                    name="file"
                    onChange={handleFileChange}
                    required
                    className="w-full px-4 py-3 border-2 border-dashed border-indigo-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all bg-indigo-50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-indigo-900 hover:file:bg-amber-500 file:cursor-pointer"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Accepted formats: .doc, .docx (Max size: 3MB)
                </p>
              </div>

              {/* Conference Source */}
              <div>
                <label className="block text-indigo-900 font-semibold mb-2">
                  How did you know about the conference? <span className="text-amber-500">*</span>
                </label>
                <textarea
                  name="conferenceSource"
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all resize-none"
                  placeholder="Please tell us how you heard about this conference"
                ></textarea>
              </div>

              {/* Message */}
              <div>
                <label className="block text-indigo-900 font-semibold mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-indigo-600 focus:ring-2 focus:ring-amber-400 transition-all resize-none"
                  placeholder="Any additional information you'd like to share"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 text-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Submit Your Paper
                </button>
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 text-gray-600">
            <p className="text-sm">
              <span className="text-amber-500">*</span> indicates required fields
            </p>
          </div>
        </div>
      </section>

      <style>
        {`
          .PhoneInputInput {
            padding: 0.75rem 1rem;
            border: 2px solid #d1d5db;
            outline: none;
            border-radius: 0.5rem;
            width: 100%;
            transition: all 0.2s;
          }
          
          .PhoneInputInput:focus {
            border-color: #4f46e5;
            ring: 2px;
            ring-color: #fbbf24;
          }

          .phone-input-custom .PhoneInputCountry {
            margin-right: 0.5rem;
          }
        `}
      </style>
    </section>
  );
};

export default AbstractFullPaperSubmission;