import React, { useState } from "react";
import Hero from "../../components/common/common-hero/common-hero.jsx";
import Enquiry from "../contact-us/Enquiry";
import { 
  Tag, 
  Presentation, 
  Mic, 
  Briefcase, 
  Search, 
  Users, 
  BookOpen, 
  Globe, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Building2, 
  Award, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const AcademicPartner = () => {
  const [popup, setPopup] = useState(false);

  const benefits = [
    {
      icon: Tag,
      title: "Registration Discounts",
      desc: "Exclusive discounted registration rates for faculty, researchers, and students of partner institutions.",
      tag: "10% to 25% Off"
    },
    {
      icon: Presentation,
      title: "Research Presentation",
      desc: "Priority slots for research paper presentations and poster display opportunities.",
      tag: "Priority Access"
    },
    {
      icon: Mic,
      title: "Keynote Opportunities",
      desc: "Distinguished faculty members can serve as Keynote Speakers or Plenary Session leaders.",
      tag: "Leadership"
    },
    {
      icon: Briefcase,
      title: "Session Chairing",
      desc: "Senior academic staff get opportunities to Chair technical sessions and moderate discussions.",
      tag: "Honorary Role"
    },
    {
      icon: Search,
      title: "Reviewer Panels",
      desc: "Qualified faculty join the International Scientific Review Committee and Editorial Boards.",
      tag: "Peer Review"
    },
    {
      icon: Users,
      title: "Committee Membership",
      desc: "Institutional leaders join the Steering & Advisory Board of future global conference series.",
      tag: "Global Advisory"
    },
    {
      icon: BookOpen,
      title: "SCOPUS Publication Pathways",
      desc: "Direct guidance and expedited review for publishing in SCOPUS & Web of Science indexed journals.",
      tag: "Scopus & WOS"
    },
    {
      icon: Globe,
      title: "Academic Networking",
      desc: "Establish bilateral MoUs, student exchanges, and joint research projects with global universities.",
      tag: "Global Network"
    }
  ];

  const promotionChannels = [
    "University Logo on Official Conference Website & Portals",
    "Digital Conference Brochure & Flyer Sponsorship Placement",
    "Social Media Campaign Recognition & Press Releases",
    "On-Site Banner & Digital Backdrop Display Branding",
    "Inclusion in Inaugural & Valedictory Special Announcements",
    "Co-Branded Certificates for Participating Delegates"
  ];

  const idealPartners = [
    "Universities & Autonomous Colleges",
    "Engineering & Medical Colleges",
    "Independent Research Institutes & Labs",
    "Academic Departments & Faculties",
    "Research & Innovation Centers"
  ];

  const contacts = [
    {
      name: "Ms. Suhana S",
      role: "Academic Partnership Head",
      phone: "+91 8610656424",
      email: "collaboration@confworld.org",
      type: "male"
    },
    {
      name: "Ms. Aishwarya S",
      role: "Conference Relations Officer",
      phone: "+91 8072381719",
      email: "info@icetmrs.com",
      type: "female1"
    },
    {
      name: "Ms. Malathy G",
      role: "Delegate Coordinator",
      phone: "+91 6383055014",
      email: "info@icetmrs.com",
      type: "female2"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Common Hero Banner */}
      <Hero
        title="Academic Partner"
        breadcrumbs={[{ label: "Home", href: "/" }]}
        backgroundImage="/images/commonhero/2.webp"/>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mt-10">
            Exclusive Key Benefits for Partner Institutions
          </h3>
          <p className="text-gray-500 mt-2">Empowering academic communities through strategic global collaboration</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-indigo-950 mb-2 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Promotion & Criteria Section */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left Column: Promotion Channels */}
            <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div>
                <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm mb-3">
                  <Award className="w-5 h-5" /> Brand Visibility & Exposure
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                  Comprehensive Brand Promotion Channels
                </h3>
                <p className="text-indigo-200 text-sm mb-6 leading-relaxed">
                  Partner institutions receive extensive publicity across all official conference marketing assets and global outreach channels.
                </p>

                <div className="space-y-4">
                  {promotionChannels.map((channel, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm font-medium">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-indigo-300">
                <span>Global Reach: 50+ Countries</span>
                <span>Active Promotion Year-Round</span>
              </div>
            </div>

            {/* Right Column: Eligibility & Ideal Partners */}
            <div className="flex flex-col gap-6 justify-between">
              {/* Eligibility Card */}
              <div className="bg-amber-500/10 border-2 border-amber-400/40 rounded-3xl p-8 relative overflow-hidden shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-md font-bold text-xl">
                    5+
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-indigo-950 mb-1">
                      Partnership Eligibility Criteria
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      To qualify as an official Academic Partner, institutions agree to facilitate a minimum of <strong className="text-indigo-900 underline font-bold">5 to 10 registered delegate papers</strong> (faculty/scholars/students) for the conference.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ideal Partners Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-indigo-600" />
                    Who Can Become an Academic Partner?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {idealPartners.map((partner, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-gray-800 font-semibold text-sm">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        {partner}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3 text-sm text-gray-500">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Custom MoU agreements available upon request.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Partner Banner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-amber-600 p-8 md:p-12 text-white shadow-2xl overflow-hidden -skew-y-1">
          <div className="skew-y-1 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Joint Academic Venture
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Ready to Join as an Academic Partner?
              </h3>
              <p className="text-indigo-100 text-base max-w-xl">
                Collaborate with CERADA to boost your institute’s research credentials. Click below to submit an inquiry or email our collaboration team directly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button
                onClick={() => setPopup(true)}
                className="bg-amber-400 hover:bg-amber-500 text-indigo-950 font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Ask Enquiries
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="mailto:collaboration@confworld.org"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5 text-amber-400" />
                collaboration@confworld.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Partnership Team Contacts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-indigo-950">
            Partnership Team Contacts
          </h3>
          <p className="text-gray-500 mt-2">Get in touch with our dedicated academic relationship managers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((c, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full mb-4 border-4 border-amber-400 p-0.5 bg-amber-50 shadow-lg group-hover:scale-110 transition-transform overflow-hidden flex items-center justify-center">
                <img 
                  src={c.type === "male" 
                    ? "https://e7.pngegg.com/pngimages/643/98/png-clipart-computer-icons-avatar-mover-business-flat-design-corporate-elderly-care-microphone-heroes-thumbnail.png"
                    : "https://www.pngitem.com/pimgs/m/248-2483089_ubud-monkey-forest-flat-design-flat-icon-person.png"
                  } 
                  alt={c.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h4 className="text-xl font-bold text-indigo-950">{c.name}</h4>
              <p className="text-amber-600 font-semibold text-xs mb-6 uppercase tracking-wider">{c.role}</p>

              <div className="w-full space-y-3 text-sm pt-2 border-t border-gray-100">
                <a 
                  href={`tel:${c.phone}`}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {c.phone}
                </a>
                <a 
                  href={`mailto:${c.email}`}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-50 text-gray-700 font-medium hover:bg-amber-400 hover:text-indigo-950 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-500" />
                  {c.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Interactive Enquiry Modal */}
      {popup && <Enquiry setPopup={setPopup} />}
    </div>
  );
};

export default AcademicPartner;
