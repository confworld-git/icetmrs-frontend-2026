import React, { useState, useEffect } from "react";
import Hero from '../../components/common/common-hero/common-hero.jsx'
import OCMForm from './OCMForm.jsx'



const OCMFormPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const target = document.getElementById("OCMform");
    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        { threshold: 0.3 }
      );
      observer.observe(target);
      return () => observer.disconnect();
    }
  }, []);

  const roles_and_responsibilities = [
    {
      name: "Strategic Guidance",
      description: "Offering expert advice to guide CERADA's direction.",
    },
    {
      name: "Conference Planning",
      description: "Assisting in the development of conference themes and selection of speakers.",
    },
    {
      name: "Review and Feedback",
      description: "Reviewing research submissions and providing constructive feedback.",
    },
    {
      name: "Abstract/Full Paper Review",
      description: "Evaluating submissions and ensuring alignment with the conference theme.",
    },
    {
      name: "Networking",
      description: "Facilitating connections with other researchers and professionals.",
    },
    {
      name: "Outreach",
      description: "Promoting CERADA's initiatives and recruiting new members and participants.",
    },
    {
      name: "Mentorship",
      description: "Supporting young researchers and professionals in their academic growth.",
    },
    {
      name: "Planning and Coordination",
      description: "Assisting with the overall event organization, including venue logistics, agenda setting and speaker arrangements.",
    },
    {
      name: "Promotion",
      description: "Engaging in marketing and outreach to attract participants and speakers.",
    },
    {
      name: "Onsite Management",
      description: "Facilitating sessions, guiding attendees and managing any technical issues during the hybrid event.",
    },
    {
      name: "Post-Conference Tasks",
      description: "Ensuring the publication of proceedings and addressing feedback.",
    },
  ];

  const qualifications = [
    {
      id: "organizing",
      title: "Organizing Committee",
      list: [
        "Doctorates with over 10 years of professional experience",
        "Keynote speakers in at least 5 international conferences",
        "CEOs/Managing Directors/Deans/Principals",
        "Research Experts",
      ],
      description: "Their responsibilities include selecting the conference venue, deciding on institutional and media partners and identifying potential co-hosts. They also have the authority to choose keynote speakers, appoint program chairs and determine session topics.",
    },
    {
      id: "advisory",
      title: "Advisory Committee",
      list: [
        "Dean/Director/Principal with a doctorate",
        "Professors/HODs with 10+ years of experience",
        "Associate Professors/Assistant Professor/Senior Lecturers with 5+ years of experience",
        "Industrial Professionals with 8+ years of experience",
        "Professionals from the host country",
      ],
      description: "The committee works closely with other teams to maintain the event schedule, assist with hospitality and registration and coordinate venue setup. They also ensure that the conference environment is well-prepared and runs smoothly.",
    },
    {
      id: "scientific",
      title: "Scientific Committee",
      list: [
        "Dean/Director/Principal with a Doctorate",
        "Should be an Editorial Board Member of a Prestigious Journal",
        "Must be an experienced Reviewer",
        "Should have served on a review committee for 10+ international conferences",
      ],
      description: "The Scientific Committee consists of three subcommittees: the Review Committee, Technical Committee and Editorial Committee. It plays a key role in setting important dates for the upcoming 2025 educational conference, managing paper submissions, developing the final program and evaluating abstracts for acceptance.",
    },
    {
      id: "hospitality",
      title: "Hospitality Committee",
      list: [
        "Dean/Director/Principal with a Doctorate",
        "Professor/HODs with 10+ years of Experience",
        "Associate Professor/Assistant Professor/Senior Lecturer with 5+ years of Experience",
        "Industrial Professionals with 8+ years of Experience",
        "Professionals from the host country",
      ],
      description: "They provide conference venue details, share the organization's background and address specific participant inquiries. Volunteers are allocated with assisting in hospitality, registration, venue setup and conference activities on a rotating schedule.",
    },
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="bg-white">
      <Hero
              title="OCM Form Page"
              breadcrumbs={[{ label: "Home", link: "#" }]}
              backgroundImage="/images/commonhero/5.webp"
      />

      <div className="w-full px-4 py-8">
        
        {/* Roles Section - GitHub Style */}
        <section className="mb-8">
          <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-200">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight">
              Roles & Responsibilities
            </h1>
          </div>

          <div className="space-y-0 border border-gray-300 rounded-lg overflow-hidden">
            {roles_and_responsibilities.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-base mb-1">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Qualifications Section - Minimal Accordion */}
        <section className="mb-8">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight">
              Committee Qualifications
            </h1>
          </div>

          <div className="space-y-1">
            {qualifications.map((qual, idx) => {
              const isActive = activeAccordion === qual.id;
              const colors = ['indigo', 'amber', 'indigo', 'amber'];
              const color = colors[idx];
              
              return (
                <div key={qual.id} className="border border-gray-200">
                  <button
                    onClick={() => toggleAccordion(qual.id)}
                    className={`w-full px-8 py-6 flex items-center justify-between text-left transition-colors ${
                      isActive 
                        ? color === 'indigo' ? 'bg-indigo-600 text-white' : 'bg-amber-500 text-white'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-2xl font-bold">{qual.title}</span>
                    <span className="text-3xl">{isActive ? '−' : '+'}</span>
                  </button>

                  {isActive && (
                    <div className="px-8 py-8 bg-gray-50">
                      <div className="mb-6">
                        <h4 className="text-sm font-bold  tracking-wide text-indigo-600 mb-4">{qual.title} Requirements</h4>
                        <ul className="space-y-3">
                          {qual.list.map((item, i) => (
                            <li key={i} className="flex gap-3">
                              <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                color === 'indigo' ? 'bg-indigo-600' : 'bg-amber-500'
                              }`}></span>
                              <span className="text-gray-800 text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold  tracking-wide text-amber-500 mb-4">{qual.title} Description</h4>
                        <p className="text-gray-800 text-lg leading-relaxed">{qual.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Form Section */}
        <section id="OCMform">
          <OCMForm/>
        </section>
      </div>

      {/* Fixed Button */}
      {isVisible && (
        <a
          href="#OCMform"
          className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-bold shadow-2xl transition-colors"
        >
          APPLY NOW →
        </a>
      )}
    </div>
  );
};

export default OCMFormPage;