import Hero from "../../components/common/common-hero/common-hero";

export default function AboutICETMRS() {
  const focusAreas = [
    {
      title: "STEM Education and Innovation",
      icon: "🔬",
      items: [
        "Advancements in Science, Technology, Engineering, and Mathematics (STEM)",
        "Interdisciplinary approaches in STEM education and research",
        "Innovations in STEM fields for global sustainability",
        "Role of technology in enhancing STEM learning outcomes",
        "Addressing challenges in STEM education for future generations",
      ],
    },
    {
      title: "Sustainable Learning and Teaching Methodologies",
      icon: "📚",
      items: [
        "Digital transformation in education and e-learning",
        "Innovative pedagogies for fostering sustainable learning",
        "The teacher-student dynamic in contemporary educational settings",
        "Integrating sustainability into curricula and teaching practices",
        "Enhancing lifelong learning through modern educational frameworks",
      ],
    },
    {
      title: "Life Sciences and Environmental Sustainability",
      icon: "🌿",
      items: [
        "Biotechnological innovations for environmental and social impact",
        "Sustainable practices in healthcare and life sciences",
        "Research on biodiversity conservation and ecosystem preservation",
        "Technological advancements in healthcare, including telemedicine",
        "Integrating life science research with sustainable development goals",
      ],
    },
    {
      title: "Social Science and Humanities for a Sustainable Future",
      icon: "🤝",
      items: [
        "Understanding human behavior in the context of sustainable development",
        "Addressing social inequality and fostering inclusive societies",
        "Role of social sciences in tackling climate change and global challenges",
        "Integrating technology with social sciences to drive social innovation",
        "Educational and research pathways for social and cultural sustainability",
      ],
    },
    {
      title: "Business, Management and Sustainable Development",
      icon: "📊",
      items: [
        "Developing sustainable business models for long-term growth",
        "Innovation in management practices for sustainable businesses",
        "Role of entrepreneurship in creating sustainable solutions",
        "Corporate social responsibility (CSR) and ethical business practices",
        "Digital transformation in business operations and management strategies",
      ],
    },
    {
      title: "Finance, Accounting and Marketing in the Age of Sustainability",
      icon: "💰",
      items: [
        "Green finance and sustainable investment strategies",
        "Role of financial innovations in promoting sustainability",
        "Marketing strategies focused on sustainability and social responsibility",
        "Emerging trends in digital finance and accounting technologies",
        "Economic policies and frameworks supporting sustainable finance",
      ],
    },
    {
      title: "Sports Science, Physiotherapy and Health Sustainability",
      icon: "⚕️",
      items: [
        "Advancements in sports science for sustainable health outcomes",
        "Integrating technology into physiotherapy for improved treatment results",
        "Sustainable sports practices for community health",
        "The role of sports in building resilient and healthy societies",
        "Innovations in rehabilitation technologies and physiotherapy education",
      ],
    },
  ];

  return (
    <section>
      <Hero
        title="About ICETMRS"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/1.webp"
      />
      <div className="bg-white min-h-screen">
        {/* ABOUT ICETMRS SECTION */}
        <section className="w-full px-4 py-8">
          {/* Header */}

          {/* Introduction */}
          <div className="w-full mb-8">
            <p className="text-2xl text-gray-800 leading-relaxed font-light mb-8">
              The 2<sup>nd</sup> International Conference on Emerging Trends in
              Multidisciplinary Research Studies (ICETMRS-2026) serves as a{" "}
              <span className="font-semibold text-indigo-600">
                global platform
              </span>{" "}
              for researchers, academicians, industry experts and policymakers
              to come together and exchange insights on the latest trends in
              multidisciplinary research.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Under the theme{" "}
              <span className="px-2 py-1 bg-amber-400 text-indigo-600 font-bold">
                "Sustainable Learning Through Multidisciplinary Research and
                Technological Innovation"
              </span>{" "}
              the conference emphasizes the integration of diverse disciplines
              to create innovative, sustainable solutions for the future of
              learning and development.
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="mb-8">
            
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight pb-4">
                Conference Objectives
              </h1>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start gap-6 p-8 bg-white border-l-8 border-indigo-600 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Promote Multidisciplinary Collaboration
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Encourage cross-disciplinary approaches to solve global
                    challenges.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6 p-8 bg-white border-l-8 border-amber-400 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl">✨</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Highlight Innovation
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Showcase advancements in technology and their applications
                    in sustainable education and learning.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6 p-8 bg-white border-l-8 border-indigo-600 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl">💬</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Facilitate Knowledge Sharing
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Provide an interactive platform for the dissemination of
                    cutting-edge research.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6 p-8 bg-white border-l-8 border-amber-400 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl">🌍</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Support Sustainable Development Goals (SDGs)
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Foster discussions that align with global efforts toward
                    sustainability and lifelong learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Deep Dive */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] p-8 md:p-16 mb-8">
            <div className="w-full px-0 md:px-8">
              <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">
                Featured Theme
              </div>
              <h2 className="text-2xl md:text-5xl font-semibold md:font-bold text-white mb-8 leading-tight">
                "Sustainable Learning Through Multidisciplinary Research and
                Technological Innovation"
              </h2>
              <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                <p>
                  This theme emphasizes the power of multidisciplinary research
                  and technological innovation in creating sustainable learning
                  environments. By integrating diverse academic disciplines and
                  harnessing the latest technological advancements, we aim to
                  develop innovative solutions to global challenges.
                </p>
                <p>
                  The conference will explore how cross-disciplinary
                  collaboration can foster new pathways for education, research,
                  and sustainable development.
                </p>
              </div>
            </div>
          </div>

          {/* What We Aim To Do */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-indigo-600 mb-8">
              Through this theme, ICETMRS-2026 aims to:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Foster innovation in learning models using cutting-edge technologies.",
                "Encourage collaboration between various disciplines to address complex global issues.",
                "Promote sustainability in education and research practices to ensure long-term impact.",
                "Advocate for inclusive learning that is accessible, adaptable, and environmentally conscious.",
              ].map((aim, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl"
                >
                  <div className="w-3 h-3 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-800 text-lg">{aim}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-amber-500 rounded-[3rem] p-4 md:p-12 text-center">
            <p className="text-2xl md:text-4xl font-semibold md:font-bold text-white leading-relaxed">
              Join us in exploring the future of education, technology and
              sustainability through interdisciplinary research and innovation.
            </p>
          </div>
        </section>

        {/* KEY FOCUS AREAS SECTION */}
        <section className="bg-white px-4 pb-8">
          <div className="w-full">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight text-center">
                Key Focus Areas
              </h1>
              <p className="text-xl text-gray-700 w-full text-center pt-2">
                These focus areas reflect the core of ICETMRS-2026, aiming to drive
                sustainable development through interdisciplinary research,
                technological innovation and educational advancement.
              </p>
            </div>

            <div className="space-y-8">
            {focusAreas.map((area, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  
                  
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {area.icon}
                    </div>
                  </div>

               
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 group-hover:text-indigo-600 transition-colors">
                      {area.title}
                    </h3>
                    <ul className="space-y-4">
                      {area.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="w-2 h-2 bg-amber-400 rounded-full mt-2.5 flex-shrink-0"></span>
                          <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>

          </div>
        </section>
      </div>
    </section>
  );
}
