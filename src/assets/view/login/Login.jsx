import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toaster } from "evergreen-ui";
import { Eye, EyeOff } from "lucide-react";
import logo from "/images/logo/icetmrslogo1.png";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/login",
        formData,
        { withCredentials: true }
      );
      if (res.status === 200) {
        toaster.success(res.data.message || "Login successful!");
        navigate("/Dashboard");
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "An unexpected error occurred.";
      toaster.danger(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setForgotLoading(true);
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/forgot-password",
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        toaster.success(res.data.message || "Credentials sent!");
      }
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : "Failed to send credentials.";
      toaster.danger(errorMessage);
    } finally {
      setForgotLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f6f8] flex flex-col justify-between font-sans">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] w-full max-w-[440px] p-8 md:p-10 border border-gray-100">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="h-16 object-contain" />
          </div>

          {/* Titles */}
          <h1 className="text-[22px] md:text-2xl font-semibold text-gray-800 text-center mb-3">
            Admin Portal
          </h1>
          

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-[11px] font-semibold text-gray-600 tracking-wider mb-2 uppercase"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@icetmrs.org"
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0a1172] focus:border-transparent text-gray-800 text-sm transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="block text-[11px] font-semibold text-gray-600 tracking-wider uppercase"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={forgotLoading}
                  className="text-xs font-semibold text-[#0a1172] hover:text-blue-900 transition-colors"
                >
                  {forgotLoading ? "Sending..." : "Forgot your password?"}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0a1172] focus:border-transparent text-gray-800 tracking-[0.2em] text-lg placeholder:tracking-normal placeholder:text-sm transition-colors"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0a1172] text-white py-3 px-4 rounded-lg text-sm font-semibold hover:bg-[#070b4a] transition duration-300 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0a1172] focus:ring-offset-2 flex justify-center items-center"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
