import React from "react";
import {
  Download,
  FileText,
  Send,
  Mail,
  Receipt,
  Users,
  Clock,
  AlertCircle,
  CreditCard,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Hero from "../../components/common/common-hero/common-hero";

export default function RegistrationProcessPage() {
  const stepRefs = React.useRef([]);

  const scrollToStep = (index) => {
    stepRefs.current[index]?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
  };

  const registrationSteps = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment",
      description: "Complete your payment for the conference",
      image: "./images/registration-instructions/payment.webp",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Download Registration Form",
      description: "After making your payment, download the Registration Form",
      image: "./images/registration-instructions/download-form.webp",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Fill Out the Form",
      description: "Complete all required fields in the Registration Form",
      image: "./images/registration-instructions/form.webp",
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Submit Registration",
      description:
        "Email the filled-out Registration Form along with your payment information to info@icetmrs.com",
      image: "./images/registration-instructions/submit-form.webp",
    },
  ];

  const guidelines = [
    {
      emoji: "📩",
      title: "Payment Notification",
      description:
        "Registered members must inform us about their payments immediately via E-mail.",
      color: "indigo"
    },
    {
      emoji: "🧾",
      title: "Proof of Payment",
      description:
        "After completing registration, every participant is required to email a scanned copy of the registration fee receipt or transaction proof to us immediately.",
      color: "amber"
    },
    {
      emoji: "📑",
      title: "Paper Submission",
      description:
        "No modifications to the paper will be accepted after the final submission date.",
      color: "indigo"
    },
    {
      emoji: "👥",
      title: "Author Limit",
      description:
        "Only one author and one co-author are allowed per registration.",
      color: "amber"
    },
    {
      emoji: "⏳",
      title: "Late Registration",
      description:
        "If you need to register after the deadlines, please contact the coordinator as soon as possible.",
      color: "indigo"
    },
    {
      emoji: "📝",
      title: "Form Submission",
      description:
        "After making your payment, download the Registration Form, fill it out and email it to us at info@icetmrs.com along with your payment information.",
      color: "amber"
    },
  ];

  return (
    <section>
      <Hero
        title="Registration Instructions"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/13.webp"
      />
      <div className="min-h-screen bg-white">
      

      {/* Registration Steps */}
      <div className="w-full px-6 py-8">
        <div className="space-y-8">
          {registrationSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-amber-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-amber-400 text-indigo-900 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-600 text-white p-3 rounded-xl">
                    {step.icon}
                  </div>
                  <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
                    Step {index + 1}
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>
                {index < registrationSteps.length - 1 && (
                  <button 
                    onClick={() => scrollToStep(index + 1)}
                    className="flex items-center gap-2 text-indigo-600 font-medium hover:gap-3 transition-all"
                  >
                    <span>Next step</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-gradient-to-r from-amber-50 to-amber-100 border-l-8 border-amber-400 rounded-2xl p-8 shadow-lg">
          <div className="flex gap-4">
            <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Important Notice
              </h3>
              <p className="text-lg text-gray-700">
                Please be aware that the payee is solely responsible for all
                associated bank charges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="pb-8 ">
        <div className="w-full px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-indigo-900 mb-4">
              Essential Registration Guidelines
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please review these important guidelines before completing your registration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Top colored bar */}
                <div className={`h-2 ${guideline.color === 'indigo' ? 'bg-gradient-to-r from-indigo-600 to-indigo-500' : 'bg-gradient-to-r from-amber-400 to-amber-500'}`}></div>
                
                <div className="p-8">
                  {/* Emoji with background */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${
                    guideline.color === 'indigo' ? 'bg-indigo-100' : 'bg-amber-100'
                  }`}>
                    <span className="text-4xl">{guideline.emoji}</span>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 ${
                    guideline.color === 'indigo' ? 'text-indigo-900' : 'text-amber-900'
                  }`}>
                    {guideline.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {guideline.description}
                  </p>
                </div>

                {/* Bottom corner accent */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 ${
                  guideline.color === 'indigo' ? 'bg-indigo-600' : 'bg-amber-400'
                } opacity-50 rounded-tl-full`}></div>
              </div>
            ))}
          </div>

          {/* Final Note */}
          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-3xl p-10 shadow-2xl">
            <div className="flex items-start gap-6 text-white">
              <div className="bg-amber-400 rounded-full p-4 flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-indigo-900" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-3">Note</h3>
                <p className="text-xl text-indigo-100 leading-relaxed">
                  The payee remains responsible for all bank charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    </section>

    
  );
}