import { useState, useEffect } from "react";

export default function ICETMRSShowcase() {

  const benefits = [
    {
      title: "Collaborative Learning Environment",
      description:
        "Engage with leading experts in meaningful conversations that spark innovation across multiple disciplines.",
      icon: "💬",
      gradient: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Be at the Forefront of Innovation",
      description: "Explore the latest trends, technologies and methodologies in multidisciplinary research.",
      icon: "🚀",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      title: "Impact Global Sustainability Goals",
      description:
        "Contribute to solutions that align with global sustainability goals and drive worldwide development.",
      icon: "🌍",
      gradient: "from-indigo-600 to-amber-500"
    },
    {
      title: "Present Your Research to a Global Audience",
      description: "Showcase your research to researchers, industry professionals and policymakers worldwide.",
      icon: "🎤",
      gradient: "from-amber-500 to-indigo-600"
    },
    {
      title: "Gain Insights from Experts",
      description:
        "Participate in keynote speeches and panel discussions led by renowned scholars and industry leaders.",
      icon: "💡",
      gradient: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Expand Your Network",
      description: "Build relationships with researchers, innovators and professionals from around the world.",
      icon: "🤝",
      gradient: "from-amber-400 to-amber-600"
    },
    {
      title: "Contribute to Sustainable Solutions",
      description: "Advance conversations on how technology and research create sustainable learning models.",
      icon: "♻️",
      gradient: "from-indigo-600 to-amber-500"
    },
    {
      title: "Publication Opportunities",
      description: "Have your research published in leading journals, increasing visibility and impact.",
      icon: "📚",
      gradient: "from-amber-500 to-indigo-600"
    },
    {
      title: "Personal and Professional Growth",
      description: "Gain exposure to new ideas, different perspectives and innovative problem-solving approaches.",
      icon: "📈",
      gradient: "from-indigo-500 to-indigo-700"
    },
  ];



  return (
    <div className=" bg-white">
      {/* Hero Section */}
      

      {/* Benefits Grid Section */}
      <section className="relative pb-8 px-4 bg-white w-full">
        <div className="w-full">
          <div className="text-center mb-8">
            
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight">
              Why Join Us?
            </h1>
            <p className="text-xl text-gray-600  mx-auto">
              Discover what makes ICETMRS-2026 the premier destination for researchers and innovators worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-id={index}
                className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-transparent 
           p-8 transition-all duration-500 shadow-md hover:shadow-2xl transform hover:-translate-y-2"

                
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>

                {/* Icon */}
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${benefit.gradient} rounded-xl text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-indigo-600 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-amber-500 transition-all duration-300">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>

                {/* Hover Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${benefit.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}