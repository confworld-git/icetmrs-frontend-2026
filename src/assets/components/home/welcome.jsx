import React, { useState } from "react";

export default function Welcome() {
  const [hoveredMission, setHoveredMission] = useState(null);

  const missions = [
    {
      title: "Technology in Education",
      description:
        "Highlight the importance of technology in transforming education and research.",
    },
    {
      title: "Sustainable Practices",
      description: "Promote sustainable practices across disciplines.",
    },
    {
      title: "Innovative Learning",
      description:
        "Foster innovative approaches to lifelong learning and development.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Welcome Section - Overlapping Panels */}
      <section className="w-full px-4 py-10 overflow-hidden">
        <div className="w-full">
          {/* Interlocked Header */}
          <div className="relative mb-8">
            <div className="flex items-start gap-12">
              <div className="flex-1">
                <div className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-6">
                  ICETMRS-2026
                </div>
                <h1 className="text-[8rem] md:text-[10rem] font-black text-indigo-600 leading-none opacity-10 absolute top-0 left-0 pointer-events-none">
                  W
                </h1>
                <div className="relative z-10 pt-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight">
                    Welcome to ICETMRS-2026
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Stacked Content Blocks */}
          <div className="space-t-4 mb-12">
            {/* Two Column Info */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    We are delighted to welcome you to the 2<sup>nd</sup> International
                    Conference on Emerging Trends in Multidisciplinary Research
                    Studies (ICETMRS-2026)!
                  </p>
                  <p>
                    This prestigious conference serves as a dynamic platform for
                    scholars, researchers, industry leaders and policymakers to
                    engage in meaningful dialogue and collaboration.
                  </p>

                  <p>
                    With the theme{" "}
                    <span className="font-bold text-indigo-600">
                      "Sustainable Learning Through Multidisciplinary Research
                      and Technological Innovation"
                    </span>
                    , ICETMRS-2026 focuses on bridging diverse disciplines to address
                    complex global challenges.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 transform -rotate-1"></div>
                <div className="relative bg-white p-8 border-l-8 border-amber-400 transform rotate-1">
                  <div className="text-7xl font-black text-gray-100 mb-4">
                    →
                  </div>
                  <h3 className="text-3xl font-black text-indigo-900 mb-4">
                    Shape the Future
                  </h3>
                  <p className="text-gray-700 text-xl leading-relaxed mb-6">
                    Join us to explore groundbreaking ideas, share your research
                    and build lasting networks that drive transformative change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Strips */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-indigo-600 p-8 text-white transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-5xl mb-3">◆</div>
              <h4 className="font-bold text-lg mb-2">Global Dialogue</h4>
              <p className="text-sm text-white">
                Connecting minds worldwide
              </p>
            </div>
            <div className="bg-amber-500 p-8 text-white transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-5xl mb-3">◈</div>
              <h4 className="font-bold text-lg mb-2">Innovation Hub</h4>
              <p className="text-sm text-white">Breakthrough research</p>
            </div>
            <div className="bg-indigo-600 p-8 text-white transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-5xl mb-3">◉</div>
              <h4 className="font-bold text-lg mb-2">Lasting Impact</h4>
              <p className="text-sm text-white">
                Transformative solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Theme Section - Diagonal Split */}
      <section className="w-full">
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-600 clip-diagonal"></div>
          <div className="relative px-6 md:px-12 pt-10 pb-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="text-amber-300">
                  <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                    Conference Theme
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-bold  leading-tight text-white">
                    "Sustainable Learning Through Multidisciplinary Research and
                    Technological Innovation"
                  </h3>
                </div>

                <div className="bg-white p-10 shadow-2xl">
                  <h4 className="text-xl font-bold text-indigo-600 uppercase tracking-wider mb-4">
                    About the Theme
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    This theme underscores the vital role of interdisciplinary
                    collaboration and technological advancements in fostering
                    sustainable learning models.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    By integrating diverse perspectives, cutting-edge research
                    and innovative solutions, the conference aims to address
                    global challenges and pave the way for a resilient,
                    inclusive and sustainable future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Horizontal Timeline */}
      <section className="w-full px-4 py-8 ">
        <div className="w-full mx-auto">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-black text-indigo-600 mb-4">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600">
              Through this theme, ICETMRS-2026 seeks to:
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gray-300 hidden md:block"></div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {missions.map((mission, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredMission(idx)}
                  onMouseLeave={() => setHoveredMission(null)}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex justify-center mb-8">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all duration-300 ${
                        hoveredMission === idx
                          ? "bg-indigo-600 scale-125"
                          : "bg-amber-400"
                      }`}
                    >
                      ✔️
                    </div>
                  </div>

                  <div
                    className={`bg-white shadow-xl p-8 transition-all duration-300 ${
                      hoveredMission === idx
                        ? "shadow-xl transform -translate-y-2"
                        : "shadow-md"
                    }`}
                  >
                    <div className="md:hidden w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white mb-4">
                      {idx + 1}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {mission.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {mission.description}
                    </p>
                    <div
                      className={`mt-6 w-full h-1 transition-all duration-300 ${
                        hoveredMission === idx
                          ? "bg-amber-400 w-full"
                          : "bg-indigo-600"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="w-full px-6 py-20 bg-gradient-to-b from-indigo-700 to-indigo-900">
        <div className="mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-6">
            
            <div className="w-3 h-3 bg-amber-400 rotate-45"></div>
            <div className="w-3 h-3 bg-white/80 rotate-45"></div>
            <div className="w-3 h-3 bg-amber-400 rotate-45"></div>
          </div>

          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight text-center">
            Building a Resilient and Sustainable Future
          </h3>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Join us in advancing knowledge through interdisciplinary research
            and innovation.
          </p>
        </div>
      </section>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
        }
      `}</style>
    </div>
  );
}
