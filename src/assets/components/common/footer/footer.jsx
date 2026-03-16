import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaBookReader,
  FaFileAlt,
  FaRegCreditCard,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="relative text-white overflow-hidden bg-gradient-to-b from-indigo-700 to-indigo-900">
      {/* Footer Content */}
      <footer className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Logo + Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-white p-4 rounded-xl w-fit mb-4 shadow-lg">
                <img
                  src="/images/logo/ceradalogo.webp"
                  className="h-16 w-16"
                  alt="Cerada Logo"
                />
              </div>
              <h2 className="font-bold text-sm mb-2 leading-tight">
                2<sup>nd</sup> International Conference on Emerging Trends in Multidisciplinary Research Studies (ICETMRS-2026)
              </h2>
              <p className="text-xs text-gray-200 mb-1">
                <span className="text-amber-400 font-semibold">Theme:</span> 
                “Sustainable Learning Through Multidisciplinary Research and Technological Innovation”
              </p>
              <p className="text-xs text-gray-200">
                <span className="text-amber-400 font-semibold">Organized by:</span> 
                Confworld Educational Research and Development Association
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-amber-400 font-bold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <FaHome className="text-white hover:text-amber-400" /> Home
                  </a>
                </li>
                <li>
                  <a href="/about-icetmrs" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <FaInfoCircle className="text-white hover:text-amber-400" /> About
                  </a>
                </li>
                <li>
                  <a href="/session-tracks-call-for-papers" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <FaBookReader className="text-white hover:text-amber-400" /> Session
                  </a>
                </li>
                <li>
                  <a href="/abstract-full-paper-submission" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <FaFileAlt className="text-white hover:text-amber-400" /> Paper Submission
                  </a>
                </li>
                <li>
                  <a href="/registration-fees" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <FaRegCreditCard className="text-white hover:text-amber-400" /> Registration
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-amber-400 font-bold mb-4 text-lg">Follow Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.facebook.com/people/Confworld-Educational-Research-and-Development-Association/61560894663027/" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <FaFacebookF className="text-white hover:text-amber-400" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@Confworld" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <FaYoutube className="text-white hover:text-amber-400" /> YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/infoconfworld/?hl=en" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <FaInstagram className="text-white hover:text-amber-400" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/infoconfworld/?hl=en" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <FaXTwitter className="text-white hover:text-amber-400" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/confworld-educational-research-and-development-association/" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <FaLinkedinIn className="text-white hover:text-amber-400" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://whatsapp.com/channel/0029VbCQG5z4inos7Mt6r61W" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <FaWhatsapp className="text-white hover:text-amber-400" /> Whatsapp
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-amber-400 font-bold mb-4 text-lg">Contact Us</h3>
              <ul className="space-y-3 text-sm mb-4">
                <li className="flex items-center gap-2">
                  <FaPhoneAlt className="text-white hover:text-amber-400" /> +91 8072381719
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-white hover:text-amber-400" /> info@icetmrs.com
                </li>
              </ul>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-amber-400/30">
                <h4 className="text-xs font-bold text-amber-400 mb-1">Organizer Address:</h4>
                <p className="text-xs leading-relaxed">
                  No.147/383A, Second Floor, Paper Mills Road, Peravallur, Chennai-600082, Tamil Nadu, India.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-6 text-center">
            <p className="text-sm">
              © 2026{" "}
              <a href="#" className="text-amber-400 hover:text-amber-300 font-semibold">
                CERADA
              </a>. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
