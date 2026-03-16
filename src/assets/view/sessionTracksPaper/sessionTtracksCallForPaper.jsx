import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import conferenceSessions from "./sessionTracksPaperJons";
import { Helmet } from "react-helmet";
import Hero from "../../components/common/common-hero/common-hero";
import DeadLines from "../../components/common/deadLine";

export default function SessionTracks() {
  const location = useLocation();
  const [activeId, setActiveId] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  // Scroll to section if hash in URL
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          if (id === conferenceSessions[0].id) {
            const headerOffset = 150;
            const elementPosition =
              el.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, [location]);

  // Track which session section is active on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      const scrollPosition = window.scrollY + 200; // Adjusted for better detection

      conferenceSessions.forEach((session) => {
        const el = document.getElementById(session.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            current = session.id;
          }
        }
      });

      if (current) {
        setActiveId(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (sessionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sessionId]: !prev[sessionId],
    }));
  };

  return (
    <section>
      <Hero
        title="Session Tracks / Call for Papers"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/6.webp"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-amber-50">
        {/* <Helmet>
        <title>
          ICLSMHA 2026 Session Tracks | Public Health, Biotechnology, Psychology
          & Healthcare
        </title>
        <meta
          name="description"
          content="Discover ICLSMHA 2026 session tracks covering public health, biotechnology, AI in healthcare, nutrition, psychology, mental health, biomedical research, and life sciences."
        />
        <meta
          name="keywords"
          content="public health conference, medical conference, AI in healthcare research paper, biotechnology research paper, biotechnology conference, international biotechnology conference, international journal of biotechnology, applied biotechnology journal, health innovation summit, conference for nutrition, biomedical conference, mental health conference, mental health seminar, psychology conference, international psychology conference, food security conference, international healthcare conference 2026, life sciences conference"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/session-tracks-call-for-papers" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet> */}

        {/* Top Header */}
        <header className="px-6 md:px-12 py-12 text-center max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent mb-4">
            Session Tracks & Call for Papers
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-6">
            Call for Submissions
          </h2>
          <p className="text-gray-700 max-w-4xl xl:max-w-5xl mx-auto leading-relaxed text-lg">
            Explore the diverse and dynamic session tracks at ICETMRS-2026. We
            have curated a rich blend of educational and interdisciplinary
            presentations designed to inspire innovation and foster
            collaboration. Join us to engage with cutting-edge research and
            vibrant discussions spanning a wide spectrum of life sciences and
            healthcare topics.
          </p>
        </header>

        <div className="flex flex-1  w-full relative px-4 pb-12">
          {/* Sidebar for desktop */}
          <aside className="hidden lg:flex flex-col sticky top-24 left-0 w-100 h-[calc(100vh-7rem)] bg-white border border-indigo-100 rounded-2xl p-6 overflow-y-auto shadow-xl z-30">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-2">
                Navigation
              </h2>
              <div className="w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
            </div>
            <nav className="flex flex-col space-y-2">
              {conferenceSessions.map((session, index) => (
                <a
                  key={session.id}
                  href={`#${session.id}`}
                  className={`group flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    activeId === session.id
                      ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg scale-105"
                      : "text-indigo-700 hover:bg-indigo-50 hover:pl-6"
                  }`}
                >
                  <span
                    className={`mr-3 flex-shrink-0 rounded-lg flex items-center justify-center 
  text-xs font-bold px-3 py-1
  ${
    activeId === session.id
      ? "bg-amber-400 text-indigo-900"
      : "bg-indigo-100 text-indigo-600 group-hover:bg-amber-400 group-hover:text-indigo-900"
  }`}
                  >
                    Session {index + 1}
                  </span>

                  <span className="flex-1 leading-tight">{session.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Mobile sidebar toggle button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden fixed top-28 left-4 z-40 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-3 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Open sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Sidebar drawer for mobile */}
          {sidebarOpen && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
                onClick={() => setSidebarOpen(false)}
                aria-hidden="true"
              />
              <aside className="fixed top-0 left-0 bottom-0 w-80 bg-white shadow-2xl p-6 overflow-y-auto z-50">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-indigo-900">
                      Session Tracks
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-2"></div>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Close sidebar"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <nav className="flex flex-col space-y-2">
                  {conferenceSessions.map((session, index) => (
                    <a
                      key={session.id}
                      href={`#${session.id}`}
                      onClick={() => setSidebarOpen(false)}
                      className={`group flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        activeId === session.id
                          ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg"
                          : "text-indigo-700 hover:bg-indigo-50"
                      }`}
                    >
                      <span
                        className={`mr-3 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                          activeId === session.id
                            ? "bg-amber-400 text-indigo-900"
                            : "bg-indigo-100 text-indigo-600 group-hover:bg-amber-400 group-hover:text-indigo-900"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="flex-1 leading-tight">
                        {session.title}
                      </span>
                    </a>
                  ))}
                </nav>
              </aside>
            </>
          )}

          {/* Main content */}
          <main className="flex-1 lg:ml-8 space-y-8">
            {conferenceSessions.map((session, index) => (
              <section
                key={session.id}
                id={session.id}
                className="scroll-mt-32 bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Header with gradient */}
                {/* <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 border border-amber-400 p-6 md:p-8">
                  <div className="flex items-center">
                    <span className="bg-amber-400 text-indigo-900 w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold mr-4 shadow-lg flex-shrink-0">
                      {index + 1}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white flex-1">
                      {session.title}
                    </h2>
                  </div>
                </div> */}

                {/* Image */}
                <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gradient-to-br from-indigo-100 to-amber-50">
                  <img
                    src={session.cover}
                    alt={session.title}
                    title={session.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 border border-amber-400 rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Topics with collapse functionality */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-indigo-900 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-amber-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Topics of Interest
                    </h3>
                    {session.topics.length > 6 && (
                      <button
                        onClick={() => toggleSection(session.id)}
                        className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
                      >
                        {expandedSections[session.id]
                          ? "Show Less"
                          : "Show More"}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedSections[session.id] ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Topics grid */}
                  <div className="grid md:grid-cols-2 gap-3">
                    {(expandedSections[session.id]
                      ? session.topics
                      : session.topics.slice(0, 6)
                    ).map((topic, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-3 rounded-lg bg-gradient-to-r from-indigo-50 to-amber-50 border border-indigo-100 hover:border-amber-400 transition-all duration-200 group hover:shadow-md"
                      >
                        <svg
                          className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm leading-relaxed group-hover:text-indigo-900 transition-colors">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Topic count indicator */}
                  {session.topics.length > 6 && (
                    <div className="mt-4 text-center">
                      <span className="text-sm text-indigo-600 font-medium bg-indigo-50 px-4 py-2 rounded-full">
                        {expandedSections[session.id]
                          ? `Showing all ${session.topics.length} topics`
                          : `Showing 6 of ${session.topics.length} topics`}
                      </span>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
      <DeadLines />
    </section>
  );
}
