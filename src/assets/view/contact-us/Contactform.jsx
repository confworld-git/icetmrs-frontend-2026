import React, { useRef, useState } from "react";
import axios from "axios";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Contactform = () => {
  const ContactRef = useRef();
  const [MobileNumber, setMobileNumber] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const validateForm = (data) => {
    for (const key in data) {
      if (!data[key] || String(data[key]).trim() === "") {
        toaster.warning(`Please fill out the ${key.replace(/_/g, " ")} field.`);
        return false;
      }
    }
    return true;
  };

  const HandleContactData = async (e) => {
    e.preventDefault();
    const formData = new FormData(ContactRef.current);
    const ContactData = Object.fromEntries(formData.entries());
    ContactData.Contact_Number = MobileNumber;

    const isValid = validateForm(ContactData);
    if (!isValid) {
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        ContactData
      );
      if (response) {
        ContactRef.current.reset();
        setMobileNumber("");
        toaster.success(response.data.message);
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toaster.danger("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative overflow-hidden py-6 sm:py-12 px-4">
      
      <div className="w-full relative">
        <h1 className="text-2xl sm:text-4xl md:text-5xl pb-6 sm:pb-8 font-bold leading-tight text-center px-2">
          <span className="text-indigo-600">We're here to help!</span> 
        </h1>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left Side - Info Card */}
          <div className="lg:sticky lg:top-24 space-y-6 sm:space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-amber-400 rounded-2xl sm:rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border-2 border-indigo-100 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl hover:shadow-indigo-200/50 transition-all duration-500">
                <div className="inline-block mb-4 sm:mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-amber-400 rounded-xl sm:rounded-2xl blur-lg opacity-40"></div>
                    <div className="relative bg-gradient-to-r from-indigo-600 to-amber-400 rounded-xl sm:rounded-2xl p-3 sm:p-5 transform hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-amber-500 bg-clip-text text-transparent leading-tight">
                  Let's Start a Conversation
                </h1>
                
                <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  Have a question or want to work together? Drop us a message and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-2.5 sm:p-3 rounded-xl group-hover/item:shadow-lg group-hover/item:shadow-indigo-200/50 transition-all duration-300 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold mb-1 text-sm sm:text-base">Quick Response</h3>
                      <p className="text-gray-500 text-xs sm:text-sm">We typically reply within a few hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-2.5 sm:p-3 rounded-xl group-hover/item:shadow-lg group-hover/item:shadow-amber-200/50 transition-all duration-300 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold mb-1 text-sm sm:text-base">Secure & Private</h3>
                      <p className="text-gray-500 text-xs sm:text-sm">Your information is always protected</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-200 p-2.5 sm:p-3 rounded-xl group-hover/item:shadow-lg group-hover/item:shadow-purple-200/50 transition-all duration-300 flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold mb-1 text-sm sm:text-base">Friendly Support</h3>
                      <p className="text-gray-500 text-xs sm:text-sm">We're here to help you succeed</p>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t-2 border-gradient-to-r from-indigo-100 to-amber-100">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 sm:border-3 border-white shadow-lg"></div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 sm:border-3 border-white shadow-lg"></div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 sm:border-3 border-white shadow-lg"></div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold text-xs sm:text-sm">Join our happy customers</p>
                      <div className="flex gap-0.5 sm:gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-amber-400 rounded-2xl sm:rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/90 backdrop-blur-xl border-2 border-indigo-100 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl hover:shadow-indigo-200/50 transition-all duration-500">
              
              
              <form ref={ContactRef} onSubmit={HandleContactData} className="space-y-4 sm:space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative group/field">
                    <input
                      type="text"
                      name="First_Name"
                      onFocus={() => setFocusedField('firstname')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg"
                      placeholder="First Name"
                      required
                    />
                    {focusedField === 'firstname' && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full"></div>
                    )}
                  </div>

                  <div className="relative group/field">
                    <input
                      type="text"
                      name="Last_Name"
                      onFocus={() => setFocusedField('lastname')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 hover:border-amber-300 hover:shadow-lg"
                      placeholder="Last Name"
                      required
                    />
                    {focusedField === 'lastname' && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full"></div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative group/field">
                  <input
                    type="email"
                    name="Email"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg"
                    placeholder="Your Email Address"
                    required
                  />
                  {focusedField === 'email' && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full"></div>
                  )}
                </div>

                {/* Phone Number Field */}
                <div className="relative group/field phone-input-container">
                  <div className="phone-input-light">
                    <PhoneInput
                      onChange={setMobileNumber}
                      value={MobileNumber}
                      defaultCountry="IN"
                      id="Mobile_Number"
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="WhatsApp / Viber Number (with country code)"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-100 transition-all duration-300 hover:border-amber-300 hover:shadow-lg custom-phone-input"
                    />
                  </div>
                  {focusedField === 'phone' && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full"></div>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative group/field">
                  <textarea
                    rows={5}
                    name="Message"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 resize-y hover:border-indigo-300 hover:shadow-lg"
                    placeholder="How can we help you today?"
                    required
                  />
                  {focusedField === 'message' && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-full"></div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    className="relative w-full group/button overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 animate-gradient-x"></div>
                    <div className="relative px-6 sm:px-8 py-4 sm:py-5">
                      <span className="flex items-center justify-center gap-2 sm:gap-3 text-white font-bold text-base sm:text-lg">
                        Send Message
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover/button:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </button>
                </div>

                
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .phone-input-light .PhoneInputInput {
          background: transparent;
          border: none;
          outline: none;
          color: #111827;
          font-size: 0.875rem;
        }

        @media (min-width: 640px) {
          .phone-input-light .PhoneInputInput {
            font-size: 1rem;
          }
        }
        
        .phone-input-light .PhoneInputInput::placeholder {
          color: #9ca3af;
        }
        
        .phone-input-light .PhoneInputCountrySelect {
          background: transparent;
          border: none;
          color: #111827;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Contactform;