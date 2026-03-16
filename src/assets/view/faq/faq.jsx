import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Search,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import Hero from "../../components/common/common-hero/common-hero";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
  question: "What is ICETMRS-2026?",
  answer: (
    <>
      The 2<sup className="text-sm align-super ">nd</sup>{" "}
      International Conference on Emerging Trends in Multidisciplinary Research
      Studies (ICETMRS-2026) is a premier event designed to bring together
      researchers, professionals, students and scholars from diverse fields.
    </>
  ),
  category: "General",
},
    {
      question: "Who can attend the conference?",
      answer:
        "The conference is open to faculty members, academic scholars, students, industry professionals and anyone interested in the fields of science, technology, engineering, education and social sciences.",
      category: "General",
    },
    {
      question: "How do I register for the conference?",
      answer:
        "You can register for ICETMRS-2026 through our online registration portal. Choose your category, fill out the registration form, select your sessions and complete the payment process.",
      category: "Registration",
    },
    {
      question: "What is the registration fees?",
      answer:
        "The registration fees vary based on the category and registration period. Detailed fee information is available on the Registration Page.",
      category: "Registration",
    },
    {
      question: "Can I submit my paper for presentation?",
      answer:
        "Yes, you can submit your abstract or full paper through our submission portal. All submissions will be reviewed, and accepted papers will be presented at the conference.",
      category: "Submission",
    },
    {
      question: "Will my paper be published?",
      answer:
        "High-quality papers presented at the conference will be considered for publication in various Web of Science, Scopus and other internationally indexed journals.",
      category: "Publication",
    },
    {
      question: "What is the review process for submitted papers?",
      answer:
        "All submitted papers will undergo a rigorous peer-review process conducted by experts in the respective fields. Reviewers will assess the originality, significance, and technical quality of the papers. Authors will be notified of the review results and any required revisions.",
      category: "Submission",
    },
    {
      question: "What is included in the registration fee?",
      answer:
        "The registration fee includes access to all sessions and workshops, conference materials, refreshments and lunch during conference days, a certificate of participation and networking opportunities.",
      category: "Registration",
    },
    {
      question: "Is there a cancellation policy?",
      answer:
        "Yes, cancellations made 50 Days Before Conference: 40% refundable. 30-40 Days Before Conference: 35% refundable. Less Than 30 Days Before Conference: No refunds will be issued.",
      category: "Registration",
    },
    {
      question: "How do I contact the conference organizers?",
      answer: (
        <>
          For general inquiries, please email{" "}
          <a
            href="mailto:info@confworld.org"
            className="text-indigo-600 hover:text-indigo-800 underline font-semibold"
          >
            info@confworld.org
          </a>
          .
          <br />
          For registration-related queries contact{" "}
          <a
            href="mailto:info@icetmrs.com"
            className="text-indigo-600 hover:text-indigo-800 underline font-semibold"
          >
            info@icetmrs.com
          </a>
          .
          <br />
          For sponsorship opportunities, reach out to{" "}
          <a
            href="mailto:collaboration@confworld.org"
            className="text-indigo-600 hover:text-indigo-800 underline font-semibold"
          >
            collaboration@confworld.org
          </a>
          .
        </>
      ),
      category: "General",
    },
    {
      question: "Will my presented paper be published?",
      answer:
        "Yes, high-quality papers presented at the conference will be considered for publication in various Web of Science, Scopus and other internationally indexed journals.",
      category: "Publication",
    },
    {
      question: "How do I submit my paper for publication?",
      answer:
        "After presenting at the conference, you will receive detailed instructions on how to submit your paper for publication consideration in the indexed journals.",
      category: "Publication",
    },
    {
      question: "What is the review process for publication?",
      answer:
        "All submitted papers undergo a rigorous peer-review process by experts in the relevant field to ensure the quality and relevance of the research.",
      category: "Publication",
    },
    {
      question: "Are there any additional fees for publication?",
      answer:
        "There may be additional fees for publication in certain journals. Detailed information will be provided after your paper is accepted for presentation at the conference.",
      category: "Publication",
    },
    {
      question: "When will I know if my paper is accepted for publication?",
      answer:
        "You will be notified about the acceptance of your paper for publication after the review process is complete, typically within 5 months post-conference.",
      category: "Publication",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ["All", ...new Set(faqData.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const displayedFAQs =
    selectedCategory === "All"
      ? filteredFAQs
      : filteredFAQs.filter((item) => item.category === selectedCategory);

  return (
    <section>
      <Hero
              title="Frequently Asked Questions"
              breadcrumbs={[{ label: "Home", link: "#" }]}
              backgroundImage="/images/commonhero/16.webp"
      />
            <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative  overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 pt-8 relative">
          <div className="text-center">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-500 focus:border-amber-400 focus:outline-none text-gray-900 placeholder-gray-500 shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-indigo-50 shadow"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {displayedFAQs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-indigo-600"
            >
              <button
                className="flex justify-between items-center w-full text-left p-6 focus:outline-none group"
                onClick={() => handleToggle(index)}
              >
                <div className="flex-1 pr-4">
                  {/* <span className="inline-block bg-gray-100 text-amber-500 text-xs font-semibold px-3 py-1 rounded-xl mb-2">
                    {item.category}
                  </span> */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {item.question}
                  </h3>
                </div>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-indigo-600 rotate-180"
                      : "bg-gray-100"
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 ${
                      openIndex === index ? "text-white" : "text-gray-600"
                    }`}
                  />
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {displayedFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-block bg-gray-100 rounded-full p-6 mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No results found
            </h3>
            <p className="text-gray-600">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="bg-amber-400 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-indigo-900" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Email Support</h3>
            <p className="text-indigo-100 mb-4">Get help via email</p>
            <a
              href="mailto:info@confworld.org"
              className="text-amber-400 font-semibold hover:text-amber-300"
            >
              info@icetmrs.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl p-8 text-indigo-900 shadow-xl">
            <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <MessageCircle className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Queries</h3>
            <p className="text-indigo-800 mb-4">
              Drop your queries in the contact us form
            </p>
            <a
              href="/contact-us"
              className="text-indigo-900 font-semibold hover:text-indigo-700 bg-amber-300 p-2 rounded-lg"
            >
               Contact Us
            </a>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="bg-amber-400 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-indigo-900" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Phone Support</h3>
            <p className="text-indigo-100 mb-4">Call us directly</p>
            <a
              href="tel:+1234567890"
              className="text-amber-400 font-semibold hover:text-amber-300"
            >
              +91 6383055014
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default FAQ;
