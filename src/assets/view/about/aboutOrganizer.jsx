import Hero from "../../components/common/common-hero/common-hero";

export default function AboutCERADA() {
  const whatWeDoItems = [
    {
      icon: "📘",
      title: "Educational Initiatives",
      description:
        "CERADA organizes a wide range of educational initiatives, which includes conferences, workshops, webinars, guest lectures, seminars, short-term training programs, public education programs and faculty development programs.",
    },
    {
      icon: "🔎",
      title: "Innovation & Research",
      description:
        "With a focus on curiosity, innovation and the latest trends in Engineering and Technology, CERADA is devoted to advancing knowledge in these fields.",
    },
    {
      icon: "📝",
      title: "Academic Resources",
      description:
        "We are committed to provide easy access to academic resources and support for aspiring students and research scholars from both urban and rural areas.",
    },
    {
      icon: "📈",
      title: "Strategic Partnerships",
      description:
        "We are committed to fostering partnerships with universities, organizations and associations to promote knowledge sharing and work collectively toward building a better future.",
    },
  ];

  const membershipTypes = [
    {
      title: "Student Membership",
      icon: "🎓",
      link: "https://confworld.org/student",
    },
    {
      title: "Professional Membership",
      icon: "💼",
      link: "https://confworld.org/professional",
    },
    {
      title: "Institutional Membership",
      icon: "🏛️",
      link: "https://confworld.org/institutional",
    },
  ];

  return (
    <section>
      <Hero
        title="About CERADA"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/2.webp"
      />
      <div className="bg-white ">
        

        {/* //text content */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-amber-50 py-10 px-4">
        <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
        
        <div className="w-full relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <p className="text-2xl text-gray-800 leading-relaxed mb-8">
                Confworld Educational Research And Development Association, an <span className="relative inline-block">
                  <span className="relative z-10 font-bold text-indigo-600">internationally recognized</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-400 opacity-30"></span>
                </span>, globally operating multidisciplinary professional research and development association.
              </p>

              <div className="flex gap-4">
                <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2"></div>
                <p className="text-xl text-gray-700 leading-relaxed flex-1">
                  Integrating researchers and academicians working in the micro disciplines of science and technology, fostering collaboration and innovation across a broad spectrum of fields.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition"></div>
                <div className="relative bg-white rounded-3xl p-8 border-2 border-indigo-100">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
                      🎪
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">International Conferences</h3>
                      <p className="text-gray-700">Platform for researchers to present work, share ideas and network globally.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition"></div>
                <div className="relative bg-white rounded-3xl p-8 border-2 border-amber-100">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-amber-400 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
                      📝
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Publication Services</h3>
                      <p className="text-gray-700">Support for submitting to peer-reviewed journals with editing and review assistance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
        {/* //vision mission */}
        <section className="pb-12 px-4 bg-white">
        <div className="w-full">
          
          <div className="grid lg:grid-cols-2 gap-0">
            
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 p-16 lg:rounded-l-[4rem]">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
              
              <div className="relative">
                <div className="w-20 h-20 bg-amber-400 rounded-3xl flex items-center justify-center text-5xl mb-8 transform -rotate-6">
                  🎯
                </div>
                <h2 className="text-5xl font-black text-white mb-6">Our Mission</h2>
                <div className="w-full h-2 bg-amber-400 mb-8"></div>
                <p className="text-xl text-white/95 leading-relaxed">
                  Confworld Educational Research and Development Association (CERADA) advances global education and research through international conferences, research assistance and collaborative publications, fostering an inclusive environment for knowledge sharing and innovation.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 p-16 lg:rounded-r-[4rem]">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
              
              <div className="relative">
                <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-5xl mb-8 transform rotate-6">
                  ⭐
                </div>
                <h2 className="text-5xl font-black text-white mb-6">Our Vision</h2>
                <div className="w-full h-2 bg-indigo-600 mb-8"></div>
                <p className="text-xl text-white leading-relaxed">
                  Confworld Educational Research and Development Association (CERADA) envisions a borderless educational research community committed to lifelong learning and excellence, aiming to be a catalyst for transformation advancements through cutting-edge research and international partnerships.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
        {/* //bento */}
        <section className="pb-8 px-4 bg-white">
        <div className="w-full">
          
          <div className="text-center mb-8">
            
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight">
                    What We Do
                  </h1>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Building a dynamic community of professionals, educators, researchers and innovators
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="md:row-span-2 bg-white rounded-[3rem] p-12 shadow-xl border-2 border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl flex items-center justify-center text-6xl mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  📘
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-6">Educational Initiatives</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  CERADA organizes a wide range of educational initiatives, which includes conferences, workshops, webinars, guest lectures, seminars, short-term training programs, public education programs and faculty development programs.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-[3rem] p-12 relative overflow-hidden group">
              <div className="relative">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-5xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  🔎
                </div>
                <h3 className="text-3xl font-black text-indigo-900 mb-4">Innovation & Research</h3>
                <p className="text-lg text-indigo-900/90 leading-relaxed">
                  With a focus on curiosity, innovation and the latest trends in Engineering and Technology, CERADA is devoted to advancing knowledge in these fields.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-12 relative overflow-hidden group">
              <div className="relative">
                <div className="w-20 h-20 bg-amber-400 rounded-3xl flex items-center justify-center text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  📝
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Academic Resources</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  We are committed to provide easy access to academic resources and support for aspiring students and research scholars from both urban and rural areas.
                </p>
              </div>
            </div>

            <div className="md:row-span-2 md:col-start-2 md:row-start-2 bg-white rounded-[3rem] p-12 shadow-xl border-2 border-gray-100 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center text-6xl mb-8 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  📈
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-6">Strategic Partnerships</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We are committed to fostering partnerships with universities, organizations and associations to promote knowledge sharing and work collectively toward building a better future.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

        {/* //membership */}
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 py-12 px-4">
        <div className="w-full">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-amber-400 tracking-widest uppercase">Join Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Visit Our Membership Programs
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Become part of a global network of researchers, educators and innovators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipTypes.map((membership, idx) => (
              <a 
                key={idx} 
                href={membership.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {membership.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {membership.title}
                </h3>
                <div className="inline-flex items-center text-amber-400 font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      </div>
    </section>
  );
}
