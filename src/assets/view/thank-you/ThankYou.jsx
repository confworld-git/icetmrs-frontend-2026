import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "../../components/common/common-hero/common-hero";
import { CheckCircle2, ArrowRight, Download, Home, FileText, CreditCard, Mail, Calendar, ShieldCheck } from "lucide-react";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve state passed from registration or submission form
  const { 
    type = "submission", // "registration" | "submission"
    name = "Delegate / Author",
    id = "ICETMRS2026_REF_" + Math.floor(100000 + Math.random() * 900000),
    title = "Multidisciplinary Research Contribution",
    amount = null,
    paymentStatus = "Completed",
    date = new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
  } = location.state || {};

  const isRegistration = type === "registration" || amount != null;

  return (
    <section className="bg-slate-50 min-h-screen pb-16">
      <Hero
        title={isRegistration ? "Registration Confirmation" : "Submission Received"}
        breadcrumbs={[{ label: "Home", href: "/" }]}
        backgroundImage="/images/commonhero/18.webp"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
          
          {/* Top Decorative Gradient Header */}
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-amber-600 p-8 sm:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Animated / Glow Check Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transform hover:scale-105 transition-transform">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <span className="inline-block bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
              {isRegistration ? "Payment & Registration Success" : "Paper Submission Successful"}
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Thank You, {name}!
            </h1>
            
            <p className="text-indigo-100 text-base sm:text-lg max-w-xl mx-auto mt-3">
              {isRegistration 
                ? "Your registration payment has been processed successfully. A confirmation email with receipt details has been sent to your registered inbox."
                : "Your abstract/full paper submission has been received by the Scientific Committee. You will receive reviewer feedback and presentation schedules via email."
              }
            </p>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Reference & Status Alert Box */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  {isRegistration ? <CreditCard className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                    {isRegistration ? "Transaction ID / Reference" : "Submission Reference ID"}
                  </p>
                  <p className="text-xl font-extrabold text-indigo-950">{id}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-xl font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>{paymentStatus}</span>
              </div>
            </div>

            {/* Summary Details Grid */}
            <div>
              <h3 className="text-lg font-bold text-indigo-950 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-500" />
                Summary Details
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 font-medium">Participant Name</p>
                  <p className="text-base font-bold text-indigo-950 mt-1">{name}</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 font-medium">Date & Time</p>
                  <p className="text-base font-bold text-indigo-950 mt-1">{date}</p>
                </div>

                {amount && (
                  <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                    <p className="text-xs text-gray-500 font-medium">Amount Paid</p>
                    <p className="text-base font-bold text-emerald-600 mt-1">${amount}</p>
                  </div>
                )}

                <div className={`p-4 rounded-xl bg-white border border-gray-100 shadow-sm ${!amount ? 'sm:col-span-2' : ''}`}>
                  <p className="text-xs text-gray-500 font-medium">{isRegistration ? "Registration Category" : "Paper Title / Topic"}</p>
                  <p className="text-base font-bold text-indigo-950 mt-1 line-clamp-2">{title}</p>
                </div>
              </div>
            </div>

            {/* Next Steps Guidance */}
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <h4 className="text-base font-bold text-indigo-950">What happens next?</h4>
              
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span><strong>Confirmation Email:</strong> An automated confirmation notification has been dispatched to your email address.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span><strong>Scientific Desk Review:</strong> For paper submissions, official acceptance notifications and presentation slots will be shared within 3-5 business days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span><strong>Need assistance?</strong> Feel free to email us directly at <a href="mailto:info@icetmrs.com" className="text-indigo-600 font-bold underline">info@icetmrs.com</a> or call <a href="tel:+918072381719" className="text-indigo-600 font-bold">+91 8072381719</a>.</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => navigate("/")}
                className="w-full sm:w-auto bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5 text-amber-400" />
                Return to Homepage
              </button>

              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-indigo-950 font-bold px-6 py-3.5 rounded-xl border border-gray-300 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5 text-indigo-600" />
                Print / Save Receipt
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
