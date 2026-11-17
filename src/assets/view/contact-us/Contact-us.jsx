import React, { useState } from "react";
import Hero from "../../components/common/common-hero/common-hero.jsx";
import Contactform from "./Contactform";
import Enquiry from "./Enquiry";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  MessageSquarePlus, 
  ArrowRight,
  Building,
  User,
  Users
} from "lucide-react";

const Contactus = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Common Hero Banner */}
      <Hero
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }]}
        backgroundImage="/images/commonhero/5.webp"
      />

      {/* 2. Hero & Intro Grid (Magazine-style layout matching site theme) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Magazine Header & Intro */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/40 text-amber-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Building className="w-4 h-4" /> Global Secretariat & Conference Helpline
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-indigo-950 leading-tight">
              Get in Touch with the <span className="bg-gradient-to-r from-indigo-700 to-amber-600 bg-clip-text text-transparent">CERADA Organizing Secretariat</span>
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Whether you are an author inquiring about abstract submissions, a delegate planning registration, or an academic leader interested in institutional partnership, our dedicated conference support team is ready to assist you.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setPopup(true)}
                className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-indigo-700/20 transition-all flex items-center gap-3 transform hover:-translate-y-0.5"
              >
                <MessageSquarePlus className="w-5 h-5 text-amber-400" />
                Ask Quick Enquiry
              </button>
              
              <a
                href="mailto:info@cerada.in"
                className="bg-white hover:bg-slate-100 text-indigo-950 font-bold px-6 py-4 rounded-2xl border border-gray-200 shadow-sm transition-all flex items-center gap-2"
              >
                <Mail className="w-5 h-5 text-indigo-600" />
                info@cerada.in
              </a>
            </div>
          </div>

          {/* Right Magazine Hero Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 p-8 sm:p-10 text-white min-h-[380px] flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-inner">
                  <Building className="w-8 h-8" />
                </div>
                <span className="inline-flex items-center gap-1.5 bg-amber-400 text-indigo-950 text-xs font-extrabold px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Secretariat
                </span>
              </div>
              
              <div className="space-y-3 py-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  24/7 International Support Desk
                </h3>
                <p className="text-sm text-indigo-200 leading-relaxed">
                  Connecting research scholars, faculty, and academic authors across 50+ countries with prompt coordination.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-amber-300 font-semibold">
                <span>CERADA Global Network</span>
                <span>Fast Resolution Desk</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Contact Details & Trust Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Helpline */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Live Support</span>
            </div>
            <div>
              <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Conference Helpline</h4>
              <a href="tel:+918072381719" className="text-xl font-extrabold text-indigo-950 hover:text-indigo-600 transition-colors">
                +91 80723 81719
              </a>
              <p className="text-xs text-gray-500 mt-2">Mon - Sat | 9:30 AM - 6:30 PM IST</p>
            </div>
          </div>

          {/* Card 2: Official Support Email */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">Official Email</span>
            </div>
            <div>
              <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Official Support Email</h4>
              <a href="mailto:info@cerada.in" className="text-lg font-extrabold text-indigo-950 hover:text-amber-600 transition-colors break-all">
                info@cerada.in
              </a>
              <p className="text-xs text-gray-500 mt-2">Expect a response within 12 hours</p>
            </div>
          </div>

          {/* Card 3: Address Card */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md flex flex-col justify-between hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">Headquarters</span>
            </div>
            <div>
              <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">CERADA Secretariat</h4>
              <p className="text-base font-bold text-indigo-950 leading-snug">
                Chennai, Tamil Nadu, India
              </p>
              <p className="text-xs text-gray-500 mt-2">Registered Scientific Association</p>
            </div>
          </div>

          {/* Card 4: Quick Launch Modal */}
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Award className="w-6 h-6 text-amber-400" />
                <span className="text-xs font-bold text-amber-400 bg-amber-400/20 px-2.5 py-1 rounded-full">Instant Launch</span>
              </div>
              <h4 className="text-lg font-bold">Need Fast Clarification?</h4>
              <p className="text-xs text-indigo-200 mt-1">Submit your specific inquiry to our desk directly.</p>
            </div>

            <button
              onClick={() => setPopup(true)}
              className="mt-4 w-full bg-amber-400 hover:bg-amber-500 text-indigo-950 font-bold py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-2 shadow-md"
            >
              Launch Popup Modal
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. 2-Column Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-indigo-950">
            Dedicated Communication Desk Officers
          </h2>
          <p className="text-gray-500 text-sm mt-2">Reach out directly to our team based on your specific requirements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Academic Partnership Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between group hover:shadow-2xl transition-all">
            <div className="relative p-6 sm:p-8 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white">
              <span className="bg-amber-400 text-indigo-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Partnership & Promotion
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">Academic Partnership Desk</h3>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-amber-400 p-0.5 shadow-md flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://e7.pngegg.com/pngimages/643/98/png-clipart-computer-icons-avatar-mover-business-flat-design-corporate-elderly-care-microphone-heroes-thumbnail.png"
                    alt="Ms. Suhana S"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-indigo-950 text-xl">Ms. Suhana S</h4>
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">Academic Relationships Manager</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-sm border-t border-gray-100">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                  <span className="text-gray-600 font-medium">Direct Phone:</span>
                  <a href="tel:+918610656424" className="font-bold text-indigo-700 hover:text-amber-600 transition-colors">
                    +91 8610656424
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                  <span className="text-gray-600 font-medium">Direct Email:</span>
                  <a href="mailto:collaboration@confworld.org" className="font-bold text-indigo-700 hover:text-amber-600 transition-colors">
                    collaboration@confworld.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Conference Queries Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between group hover:shadow-2xl transition-all">
            <div className="relative p-6 sm:p-8 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white">
              <span className="bg-indigo-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Registration & Submissions
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">Conference Queries Desk</h3>
            </div>

            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Contact 1 */}
                <div className="space-y-2 p-3 rounded-2xl border border-gray-100 bg-slate-50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400 p-0.5 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://www.pngitem.com/pimgs/m/248-2483089_ubud-monkey-forest-flat-design-flat-icon-person.png"
                      alt="Ms. Aishwarya S"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-indigo-950 text-sm">Ms. Aishwarya S</h5>
                    <p className="text-xs text-gray-600">Tel: <a href="tel:+918072381719" className="font-bold text-indigo-700">+91 8072381719</a></p>
                  </div>
                </div>

                {/* Contact 2 */}
                <div className="space-y-2 p-3 rounded-2xl border border-gray-100 bg-slate-50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400 p-0.5 flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://www.pngitem.com/pimgs/m/248-2483089_ubud-monkey-forest-flat-design-flat-icon-person.png"
                      alt="Ms. Malathy G"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h5 className="font-bold text-indigo-950 text-sm">Ms. Malathy G</h5>
                    <p className="text-xs text-gray-600">Tel: <a href="tel:+916383055014" className="font-bold text-indigo-700">+91 6383055014</a></p>
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 text-sm">
                <span className="text-gray-600 font-medium">Conference Email:</span>
                <a href="mailto:info@icaebms.com" className="font-bold text-indigo-700 hover:text-amber-600 transition-colors">
                  info@icaebms.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Contact Form Component */}
      <section className="bg-white py-12 border-t border-gray-100">
        <Contactform />
      </section>

      {/* 6. Location Map (Embedded Google Maps iframe for CERADA Headquarters in Chennai) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4 text-amber-500" /> Interactive Secretariat Map
              </div>
              <h3 className="text-2xl font-extrabold text-indigo-950">
                CERADA Headquarters - Chennai, India
              </h3>
            </div>
            <span className="text-xs bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold px-4 py-2 rounded-full">
              Global Headquarters Location
            </span>
          </div>

          <div className="w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative">
            <iframe
              title="CERADA Headquarters Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.4448192766839!2d80.24283436951004!3d13.11316470533533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ba832b5a4d%3A0x2b9c400f07570c54!2s94%2F1%2C%20Raghavan%20St%2C%20Bunder%20Garden%2C%20Perambur%2C%20Chennai%2C%20Tamil%20Nadu%20600011!5e0!3m2!1sen!2sin!4v1789704485124!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 7. Interactive Enquiry Modal */}
      {popup && <Enquiry setPopup={setPopup} />}
    </div>
  );
};

export default Contactus;
