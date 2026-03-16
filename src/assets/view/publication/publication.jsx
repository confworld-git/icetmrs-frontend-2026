import React, { useEffect } from "react";
import Proceedings from "../../components/home/proceedingsPublications";
import { BookOpen, Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { Microscope, BookOpenCheck } from "lucide-react";
import Hero from '../../components/common/common-hero/common-hero';

import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

export default function Publication() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const plagiarism_policy_ethics = [
    {
      title: "Plagiarism Check",
      image: "/images/publication/pag_check.webp",
      list: [
        "Every submission undergoes a plagiarism check using Crossref Similarity Check, which is powered by iThenticate.",
        "This ensures that all articles submitted to the conference are original and free from plagiarism.",
      ],
    },
    {
      title: "Review Process",
      image: "/images/publication/review.webp",
      list: [
        "Submissions that pass the plagiarism check are sent to the scientific committee for review.",
        "Any submission found to be plagiarized at any stage will be automatically rejected.",
      ],
    },
  ];

  return (
    <section>
      <Hero
                    title="Publication"
                    breadcrumbs={[{ label: "Home", link: "#" }]}
                    backgroundImage="/images/commonhero/10.webp"
     />
     <section>
      {/* <Helmet>
        <title>
          Publication | ICLSMHA 2026 Scholarly Journal & Research Paper
          Publication
        </title>
        <meta
          name="description"
          content="Explore ICLSMHA 2026 publication opportunities. Publish your health scholarly articles, follow research paper publication guidelines, and present your work in leading scholarly journals and conference journal publications."
        />
        <meta
          name="keywords"
          content="health scholarly articles, research paper publication guidelines, conference journal publication, scholarly journal, research paper publication, ICLSMHA 2026"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/publication" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet> */}

      <div
        className="
min-h-screen  py-16 px-4 sm:px-6 lg:px-8
"
      >
        <div
          className="
max-w-7xl mx-auto
"
        >
          {/* Header Section */}

          <div
            className="
text-center mb-16 
"
          >
            <div className="flex justify-center items-center gap-x-3">
              <div
              className="
inline-flex items-center justify-center p-2 bg-amber-100 rounded-full mb-4
"
            >
              <Award
                className="
w-6 h-6 text-amber-600
"
              />
            </div>

            <h1
              className="
text-4xl md:text-5xl font-bold text-indigo-900 mb-4
"
            >
              Publication Opportunities
            </h1>
            </div>
            

            <p
              className="
text-lg md:text-xl text-slate-600 max-w-3xl mx-auto
"
            >
              2<sup>nd</sup> International Conference on Emerging Trends in Multidisciplinary
              Research Studies (ICETMRS-2026) provides several publication
              opportunities for presented work
            </p>
          </div>

          {/* Cards Grid */}

          <div
            className="
grid md:grid-cols-2 gap-8 lg:gap-12
"
          >
            {/* Conference Proceedings Card */}

            <div
              className="
group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-indigo-800 hover:border-indigo-600
"
            >
              {/* Mobile-first image handling (object-contain) within a fixed height div */}

              <div
                className="
h-64 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center overflow-hidden
"
              >
                {/* For MD screens, the img itself takes precedence with object-cover object-top */}

                <img
                  src="/images/publication/book.webp"
                  alt="
Conference Proceedings
"
                  className="
w-full h-full object-contain md:object-cover md:object-top border-b border-indigo-600
"
                />
              </div>

              {/* Content Section */}

              <div
                className="
p-8
"
              >
                <div
                  className="
flex items-center gap-3 mb-4
"
                >
                  <div
                    className="
flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center
"
                  >
                    <BookOpen
                      className="
w-6 h-6 text-indigo-600
"
                    />
                  </div>

                  <h2
                    className="
text-2xl font-bold text-indigo-900
"
                  >
                    Conference Proceedings
                  </h2>
                </div>

                <p
                  className="
text-slate-600 text-base leading-relaxed mb-6
"
                >
                  All accepted and registered abstracts will be published in the
                  Conference Proceedings with an ISBN Number.
                </p>

                {/* Features List */}

                <div
                  className="
space-y-3
"
                >
                  <div
                    className="
flex items-start gap-3
"
                  >
                    <CheckCircle2
                      className="
w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5
"
                    />

                    <span
                      className="
text-sm text-slate-700
"
                    >
                      Official ISBN registration for all published abstracts
                    </span>
                  </div>

                  <div
                    className="
flex items-start gap-3
"
                  >
                    <CheckCircle2
                      className="
w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5
"
                    />

                    <span
                      className="
text-sm text-slate-700
"
                    >
                      Permanent archival in conference proceedings
                    </span>
                  </div>

                  <div
                    className="
flex items-start gap-3
"
                  >
                    <CheckCircle2
                      className="
w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5
"
                    />

                    <span
                      className="
text-sm text-slate-700
"
                    >
                      Accessible to global academic community
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Journal Publication Card */}

            <div
              className="
group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-amber-500 hover:border-amber-600
"
            >
              {/* Mobile-first image handling (object-contain) within a fixed height div */}

              <div
                className="
h-64 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center overflow-hidden
"
              >
                {/* For MD screens, the img itself takes precedence with object-cover object-top */}

                <img
                  src="/images/publication/journal.png
"
                  alt="
Journal Publication
"
                  className="
w-full h-full object-contain md:object-fill md:object-top border-b border-indigo-600
"
                />
              </div>

              {/* Content Section */}

              <div
                className="
p-8
"
              >
                <div
                  className="
flex items-center gap-3 mb-4
"
                >
                  <div
                    className="
flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center
"
                  >
                    <Award
                      className="
w-6 h-6 text-amber-600
"
                    />
                  </div>

                  <h2
                    className="
text-2xl font-bold text-indigo-900
"
                  >
                    Journal Publication
                  </h2>
                </div>

                <p
                  className="
text-slate-600 text-base leading-relaxed mb-6
"
                >
                  Publish your high-quality paper in various Web of Science,
                  Scopus and other internationally indexed journals, increasing
                  the visibility and impact of your research.
                </p>

                {/* Features List */}

                <div
                  className="
space-y-3
"
                >
                  <div
                    className="
flex items-start gap-3
"
                  >
                    <CheckCircle2
                      className="
w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5
"
                    />

                    <span
                      className="
text-sm text-slate-700
"
                    >
                      Web of Science indexed publications
                    </span>
                  </div>

                  <div
                    className="
flex items-start gap-3
"
                  >
                    <CheckCircle2
                      className="
w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5
"
                    />

                    <span
                      className="
text-sm text-slate-700
"
                    >
                      Scopus indexed journal opportunities
                    </span>
                  </div>

                  <div
                    className="
flex items-start gap-3
"
                  >
                    <CheckCircle2
                      className="
w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5
"
                    />

                    <span
                      className="
text-sm text-slate-700
"
                    >
                      Enhanced research visibility and global impact
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Conference Journals */}
      <Proceedings />

      {/* ✅ Plagiarism & Publication Ethics Section */}
      <div className="relative  pb-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400 opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          
          
          <h1
              className="
text-4xl md:text-5xl font-bold text-indigo-900 mb-4
"
            >
              Plagiarism Policy & Publication Ethics
            </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-indigo-700">
              2<sup>nd</sup> International Conference on Emerging Trends in Multidisciplinary Research Studies (ICETMRS-2026)
            </span>{" "}
            adheres to stringent anti-plagiarism policies. Here are the key
            points about their process
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {plagiarism_policy_ethics.map(({ title, list }, main_index) => (
            <div
              key={main_index}
              className="group relative mt-8 md:mt-0"
            >
              {/* Card background with gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-amber-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Icon Badge */}
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  {main_index === 0 ? (
                    <Microscope className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                  ) : (
                    <BookOpenCheck className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2.5} />
                  )}
                </div>

                {/* Accent bar */}
                <div className="h-2 w-70 md:w-120 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-6 md:mb-8  "></div>

                {/* Title */}
                <h4 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6 md:mb-8 leading-tight">
                  {title}
                </h4>

                {/* List */}
                <ul className="space-y-4 md:space-y-6">
                  {list.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 md:gap-4 group/item">
                      <div className="relative mt-1 flex-shrink-0">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full"></div>
                        <div className="absolute inset-0 w-3 h-3 md:w-4 md:h-4 bg-amber-400 rounded-full animate-pulse opacity-40"></div>
                      </div>
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tl from-indigo-600 to-transparent opacity-5 rounded-tl-full"></div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
    </section>
    </section>
    
  );
}
