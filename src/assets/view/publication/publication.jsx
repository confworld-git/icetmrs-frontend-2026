import React, { useEffect } from "react";
import Proceedings from "../../components/home/proceedingsPublications";
import { BookOpen, Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { Microscope, BookOpenCheck } from "lucide-react";
import Hero from "../../components/common/common-hero/common-hero";
import Journals from "../../components/home/journals";
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
min-h-screen  py-12 px-3 sm:px-5 lg:px-6
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
text-center mb-12 
"
            >
              <div className="flex justify-center items-center gap-x-2">
                <div
                  className="
inline-flex items-center justify-center p-1.5 bg-amber-100 rounded-full mb-3
"
                >
                  <Award
                    className="
w-5 h-5 text-amber-600
"
                  />
                </div>

                <h1
                  className="
text-3xl md:text-4xl font-bold text-indigo-900 mb-3
"
                >
                  Publication Opportunities
                </h1>
              </div>

              <p
                className="
text-base md:text-lg text-slate-600 max-w-2xl mx-auto
"
              >
                2<sup>nd</sup> International Conference on Emerging Trends in
                Multidisciplinary Research Studies (ICETMRS-2026) provides
                several publication opportunities for presented work
              </p>
            </div>

            {/* Cards Grid */}

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Conference Proceedings Card */}

              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-indigo-800 hover:border-indigo-600">
                {/* Mobile-first image handling (object-contain) within a fixed height div */}

                <div className="h-56 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/publication/book.webp"
                    alt="Conference Proceedings"
                    className="w-full h-full object-cover object-center border-b border-indigo-600 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content Section */}

                <div className="p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                    </div>

                    <h2 className="text-xl font-bold text-indigo-900">
                      Conference Proceedings
                    </h2>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    All accepted and registered abstracts will be published in
                    the Conference Proceedings with an ISBN Number.
                  </p>

                  {/* Features List */}

                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 flex-shrink-0 mt-0.5" />

                      <span className="text-xs text-slate-700">
                        Official ISBN registration for all published abstracts
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 flex-shrink-0 mt-0.5" />

                      <span className="text-xs text-slate-700">
                        Permanent archival in conference proceedings
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 flex-shrink-0 mt-0.5" />

                      <span className="text-xs text-slate-700">
                        Accessible to global academic community
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Journal Publication Card */}

              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-amber-500 hover:border-amber-600">
                {/* Mobile-first image handling (object-contain) within a fixed height div */}

                <div className="h-56 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/logo/scopus-logo.png"
                    alt="Journal Publication"
                    className="w-full h-full object-contain object-center p-6 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content Section */}

                <div className="p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-amber-600" />
                    </div>

                    <h2 className="text-xl font-bold text-indigo-900">
                      Journal Publication
                    </h2>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    Publish your high-quality paper in various Web of Science,
                    Scopus and other internationally indexed journals,
                    increasing the visibility and impact of your research.
                  </p>

                  {/* Features List */}

                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-indigo-500 flex-shrink-0 mt-0.5" />

                      <span className="text-xs text-slate-700">
                        Web of Science indexed publications
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-indigo-500 flex-shrink-0 mt-0.5" />

                      <span className="text-xs text-slate-700">
                        Scopus indexed journal opportunities
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-indigo-500 flex-shrink-0 mt-0.5" />

                      <span className="text-xs text-slate-700">
                        Enhanced research visibility and global impact
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Journals />
        {/* ✅ Conference Journals */}

        {/* ✅ Plagiarism & Publication Ethics Section */}
        <div className="relative  pb-6 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600 opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400 opacity-5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-5 relative z-10 mt-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h1
                className="
text-3xl md:text-4xl font-bold text-indigo-900 mb-3
"
              >
                Plagiarism Policy & Publication Ethics
              </h1>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                <span className="font-semibold text-indigo-700">
                  2<sup>nd</sup> International Conference on Emerging Trends in
                  Multidisciplinary Research Studies (ICETMRS-2026)
                </span>{" "}
                adheres to stringent anti-plagiarism policies. Here are the key
                points about their process
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto ">
              {plagiarism_policy_ethics.map(({ title, list }, main_index) => (
                <div key={main_index} className="group relative mt-6 md:mt-0">
                  {/* Card background with gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-500 to-amber-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>

                  <div className="relative bg-white rounded-3xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Icon Badge */}
                    <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      {main_index === 0 ? (
                        <Microscope
                          className="w-6 h-6 md:w-8 md:h-8 text-white"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <BookOpenCheck
                          className="w-6 h-6 md:w-8 md:h-8 text-white"
                          strokeWidth={2.5}
                        />
                      )}
                    </div>

                    {/* Accent bar */}
                    <div className="h-1.5 w-60 md:w-100 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-5 md:mb-6  "></div>

                    {/* Title */}
                    <h4 className="text-lg md:text-2xl font-bold text-indigo-600 mb-5 md:mb-6 leading-tight">
                      {title}
                    </h4>

                    {/* List */}
                    <ul className="space-y-3 md:space-y-5">
                      {list.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 md:gap-3.5 group/item"
                        >
                          <div className="relative mt-1 flex-shrink-0">
                            <div className="w-2.5 h-2.5 md:w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full"></div>
                            <div className="absolute inset-0 w-2.5 h-2.5 md:w-3 h-3 bg-amber-400 rounded-full animate-pulse opacity-40"></div>
                          </div>
                          <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1 group-hover/item:text-gray-900 transition-colors">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-tl from-indigo-600 to-transparent opacity-5 rounded-tl-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Proceedings />
    </section>
  );
}
