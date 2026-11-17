import React, { useRef, useState } from "react";
import axios from "axios";
import { toaster } from "evergreen-ui";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CheckCircle2, AlertCircle, RefreshCw, Send, ShieldCheck, Clock, HeartHandshake } from "lucide-react";

const Contactform = () => {
  const ContactRef = useRef();
  const [MobileNumber, setMobileNumber] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [statusState, setStatusState] = useState({
    loading: false,
    message: null,
    type: null // 'success' | 'error'
  });

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

    setStatusState({ loading: true, message: "Dispatching contact request to SMTP gateway...", type: "info" });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        ContactData
      );
      if (response) {
        ContactRef.current.reset();
        setMobileNumber("");
        const msg = response.data?.message || "Message delivered successfully via SMTP server!";
        toaster.success(msg);
        setStatusState({
          loading: false,
          message: `Live SMTP Status: ${msg}`,
          type: "success"
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      const errMsg = error.response?.data?.message || "Delivery failed. Please check network/server status.";
      toaster.danger(errMsg);
      setStatusState({
        loading: false,
        message: `Live SMTP Status: ${errMsg}`,
        type: "error"
      });
    }
  };

  return (
    <div className="relative overflow-hidden py-8 px-4 max-w-7xl mx-auto">
      {/* Live SMTP Status Alert Banner */}
      {statusState.message && (
        <div className={`mb-8 p-4 rounded-2xl border flex items-center justify-between shadow-sm transition-all duration-300 ${
          statusState.type === 'success' 
            ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
            : statusState.type === 'error'
            ? 'bg-rose-50 border-rose-200 text-rose-900'
            : 'bg-indigo-50 border-indigo-200 text-indigo-900'
        }`}>
          <div className="flex items-center gap-3">
            {statusState.loading ? (
              <RefreshCw className="w-5 h-5 text-indigo-600 animate-spin flex-shrink-0" />
            ) : statusState.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
            )}
            <span className="text-sm font-semibold">{statusState.message}</span>
          </div>
          <button 
            onClick={() => setStatusState({ loading: false, message: null, type: null })}
            className="text-xs text-gray-500 hover:text-gray-800 font-bold px-2 py-1"
          >
            Dismiss
          </button>
        </div>
      )}

      <div className="w-full relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl pb-8 font-extrabold leading-tight text-center text-indigo-950">
          We're Here to Help & Listen
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Info Card */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-amber-400 rounded-3xl blur-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
              <div className="relative bg-white border border-indigo-100 rounded-3xl p-6 sm:p-10 shadow-xl">
                
                <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 text-indigo-950 leading-tight">
                  Let's Start a Conversation
                </h3>
                
                <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                  Have questions about abstract submissions, registration fees, or academic partnerships? Drop us a message and our support team will respond promptly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-50 p-3 rounded-2xl flex-shrink-0 text-indigo-600">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-indigo-950 font-bold text-base">Quick Response Guaranteed</h4>
                      <p className="text-gray-500 text-sm">We typically reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-50 p-3 rounded-2xl flex-shrink-0 text-amber-600">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-indigo-950 font-bold text-base">Secure Communication</h4>
                      <p className="text-gray-500 text-sm">Your contact details are kept strictly confidential</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-50 p-3 rounded-2xl flex-shrink-0 text-indigo-600">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-indigo-950 font-bold text-base">Dedicated Academic Support</h4>
                      <p className="text-gray-500 text-sm">Personalized guidance for all conference delegates</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Footer info */}
                <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-9 h-9 rounded-full bg-indigo-600 border-2 border-white text-white flex items-center justify-center font-bold text-xs">C</div>
                      <div className="w-9 h-9 rounded-full bg-amber-500 border-2 border-white text-white flex items-center justify-center font-bold text-xs">E</div>
                      <div className="w-9 h-9 rounded-full bg-indigo-800 border-2 border-white text-white flex items-center justify-center font-bold text-xs">R</div>
                    </div>
                    <div>
                      <p className="text-indigo-950 font-bold text-xs">CERADA Global Secretariat</p>
                      <p className="text-gray-500 text-xs">Verified Conference Organization</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-xl">
              <form ref={ContactRef} onSubmit={HandleContactData} className="space-y-5">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">First Name *</label>
                    <input
                      type="text"
                      name="First_Name"
                      onFocus={() => setFocusedField('firstname')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                      placeholder="e.g. John"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="Last_Name"
                      onFocus={() => setFocusedField('lastname')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
                      placeholder="e.g. Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="Email"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all"
                    placeholder="e.g. john.doe@university.edu"
                    required
                  />
                </div>

                {/* Phone Number Field */}
                <div className="phone-input-container">
                  <label className="block text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">Phone / WhatsApp Number *</label>
                  <div className="bg-slate-50 border border-gray-200 rounded-xl px-4 py-1.5 focus-within:bg-white focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-100 transition-all">
                    <PhoneInput
                      onChange={setMobileNumber}
                      value={MobileNumber}
                      defaultCountry="IN"
                      id="Mobile_Number"
                      placeholder="Enter mobile number with country code"
                      className="w-full text-sm custom-phone-input"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">Message *</label>
                  <textarea
                    rows={4}
                    name="Message"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all resize-y"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={statusState.loading}
                  className="w-full bg-gradient-to-r from-indigo-700 via-indigo-800 to-amber-600 hover:from-indigo-800 hover:to-amber-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  {statusState.loading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-amber-400" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .phone-input-container .PhoneInputInput {
          background: transparent;
          border: none;
          outline: none;
          color: #0f172a;
          font-size: 0.875rem;
          padding: 0.5rem 0;
        }
        .phone-input-container .PhoneInputCountrySelect {
          background: transparent;
          border: none;
          color: #0f172a;
        }
      `}</style>
    </div>
  );
};

export default Contactform;