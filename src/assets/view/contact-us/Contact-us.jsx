import React, { useState, useEffect } from "react";

import Hero from "../../components/common/common-hero/common-hero.jsx";
import Contactform from "./Contactform";
import Enquiry from "./Enquiry";
import { Helmet } from "react-helmet";

const Contactus = () => {
  const [popup, setPopup] = useState(false);



  return (
    <section>
      <Hero
        title="Contact Us"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/18.webp"
      />

      {/* Main Content */}
      <section className="bg-white py-16 px-4">
        {/* Hero Section */}
        <div className="w-full mb-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div  className="space-y-6">
              <div className="inline-block">
                <span className="bg-amber-400 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 leading-tight">
                Partner with CERADA Today
                
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover how CERADA sponsorship can benefit your organization.
                We look forward to partnering with you and creating a memorable
                and impactful experience at the CERADA International Conference.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-indigo-600"
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
                  <div>
                    <h3 className="font-semibold text-indigo-600 mb-1">
                      Email Us
                    </h3>
                    <a
                      href="mailto:collaboration@confworld.org"
                      className="text-gray-600 hover:text-amber-400 transition"
                    >
                      collaboration@confworld.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-600 mb-1">
                      Quick Enquiry
                    </h3>
                    <p className="text-gray-600">
                      Have questions? Ask us anything
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setPopup(true)}
                className="group relative bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ask Enquiries
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-amber-400 transform translate-x-full group-hover:translate-x-0 transition-transform"></div>
              </button>
            </div>

            {/* Right Image */}
            <div  className="relative">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                  alt="Connect with our international conference team"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards Section */}
        <div className="w-full ">
          <div className="text-center mb-8" >
            
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mt-4">
              Connect With Our Experts
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our dedicated team is here to assist you with all your conference
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Academic Partnership Card */}
            <div
              
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
                  alt="Medical research conference contact"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">
                    Academic Partnership
                  </h3>
                  <p className="text-white/90 text-sm">
                    Sponsorship & Promotion
                  </p>
                </div>
              </div>
              <div className=" p-8">
                    <div className="flex items-center gap-2 mb-3">
                      
                      <p className="font-bold text-indigo-600">Ms. Suhana S</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0"
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
                        <p className="text-gray-700">+91 8610656424</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0"
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
                        <a
                          href="mailto:info@icetmrs.com"
                          className="text-indigo-600 hover:text-amber-400 transition break-all"
                        >
                          collaboration@confworld.org
                        </a>
                      </div>
                    </div>
                  </div>
              
            </div>

            {/* ICETMRS Queries Card */}
            <div
              
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
                  alt="Manila international conference venue"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">
                    ICETMRS Queries
                  </h3>
                  <p className="text-white/90 text-sm">General Information</p>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Contact 1 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      
                      <p className="font-bold text-indigo-600">
                        Ms. Aishwarya S
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0"
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
                        <p className="text-gray-700">+91 8072381719</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0"
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
                        <a
                          href="mailto:info@icetmrs.com"
                          className="text-indigo-600 hover:text-amber-400 transition break-all"
                        >
                          info@icetmrs.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Contact 2 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      
                      <p className="font-bold text-indigo-600">Ms. Malathy G</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0"
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
                        <p className="text-gray-700">+91 6383055014</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0"
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
                        <a
                          href="mailto:info@icetmrs.com"
                          className="text-indigo-600 hover:text-amber-400 transition break-all"
                        >
                          info@icetmrs.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full px-4 md:px-10">
          <Contactform />
        </div>
      </section>

      {/* Enquiry Popup */}
      {popup && <Enquiry setPopup={setPopup} />}
    </section>
  );
};

export default Contactus;
