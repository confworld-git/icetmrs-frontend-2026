import React, { useState } from "react";

export default function KeyHighlights() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const highlights = [
    {
      title: "Keynote Speeches by Global Experts",
      description:
        "Hear from leading figures in academia, industry and technology as they share insights on the latest trends, innovations and challenges in multidisciplinary research and sustainable learning.",
      icon: "mic",
    },
    {
      title: "Interactive Panel Discussions",
      description:
        "Engage with thought leaders in stimulating discussions covering key topics such as technological innovation, cross-disciplinary collaboration and sustainable development in education and research.",
      icon: "users",
    },
    {
      title: "Research Presentations and Workshops",
      description:
        "Present your own research, explore cutting-edge studies and participate in hands-on workshops designed to foster deeper understanding of interdisciplinary approaches to sustainable learning.",
      icon: "presentation",
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with researchers, academicians, industry professionals and policymakers from around the world to exchange ideas, establish partnerships and collaborate on impactful projects.",
      icon: "network",
    },
    {
      title: "Special Sessions on Emerging Technologies",
      description:
        "Dive deep into the latest technological innovations shaping education, such as AI, machine learning, VR/AR and e-learning platforms and their role in driving sustainable development.",
      icon: "tech",
    },
    {
      title: "Publication Opportunities",
      description:
        "Selected papers from the conference will be considered for publication in high-impact journals, offering authors the chance to showcase their research on a global platform.",
      icon: "book",
    },
    {
      title: "Global Perspectives on Sustainability",
      description:
        "Participate in discussions on global sustainability goals and the role of multidisciplinary research in achieving long-term, inclusive solutions for the future of learning and development.",
      icon: "globe",
    },
    {
      title: "Student and Emerging Researcher Engagement",
      description:
        "Special sessions and mentoring opportunities will be available for students and early-career researchers, providing guidance and support for advancing their academic and professional pursuits.",
      icon: "graduation",
    },
    {
      title: "Awards and Recognition",
      description:
        "Exceptional contributions to the conference will be recognized with awards, celebrating the most impactful research and innovations presented during the event.",
      icon: "award",
    },
  ];

  const getIcon = (iconType) => {
    const iconProps = {
      className: "w-full h-full",
      strokeWidth: 2,
      fill: "none",
      stroke: "currentColor",
    };

    switch (iconType) {
      case "mic":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            />
          </svg>
        );
      case "users":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        );
      case "presentation":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
        );
      case "network":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            />
          </svg>
        );
      case "tech":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "book":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        );
      case "globe":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "graduation":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        );
      case "award":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full px-4 py-8 bg-white">
      <div className="w-full">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight text-center">
            Key Highlights
          </h1>
        </div>

        {/* Highlights Grid - Masonry Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((highlight, idx) => {
            const isIndigo = idx % 2 === 0;
            const bgColor = isIndigo ? "bg-indigo-50" : "bg-amber-50";
            const hoverBg = isIndigo ? "bg-indigo-600" : "bg-amber-400";

            return (
              <div
                key={idx}
                onMouseEnter={() => setExpandedIndex(idx)}
                onMouseLeave={() => setExpandedIndex(null)}
                className={`
                  group relative transition-all duration-300
                  ${idx === 0 ? "lg:col-span-2 lg:row-span-1" : ""}
                  ${idx === 5 ? "lg:col-span-2" : ""}
                  ${idx === 8 ? "lg:col-span-2" : ""}
                `}
              >
                <div
                  className={`
                  h-full rounded-2xl p-6 transition-all duration-300 
                  ${
                    expandedIndex === idx
                      ? `${hoverBg} shadow-2xl`
                      : `${bgColor} shadow-md hover:shadow-xl`
                  }
                `}
                >
                  {/* Icon Container */}
                  <div
                    className={`
                    w-16 h-16 mb-4 rounded-xl flex items-center justify-center transition-all duration-300
                    ${
                      expandedIndex === idx
                        ? "bg-white scale-110"
                        : isIndigo
                        ? "bg-indigo-100"
                        : "bg-amber-100"
                    }
                  `}
                  >
                    <div
                      className={`
                      w-10 h-10 transition-all duration-300
                      ${
                        expandedIndex === idx
                          ? isIndigo
                            ? "text-indigo-600"
                            : "text-amber-400"
                          : isIndigo
                          ? "text-indigo-600"
                          : "text-amber-400"
                      }
                    `}
                    >
                      {getIcon(highlight.icon)}
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className={`
                    text-xl font-bold mb-3 leading-tight transition-colors duration-300
                    ${
                      expandedIndex === idx
                        ? "text-white"
                        : isIndigo
                        ? "text-indigo-600"
                        : "text-amber-500"
                    }
                  `}
                  >
                    {highlight.title}
                  </h3>
                  <p
                    className={`
                    leading-relaxed transition-colors duration-300
                    ${
                      expandedIndex === idx
                        ? "text-white text-opacity-90"
                        : "text-gray-700"
                    }
                  `}
                  >
                    {highlight.description}
                  </p>

                  {/* Hover Arrow Indicator */}
                  <div
                    className={`
                    mt-4 flex items-center gap-2 transition-all duration-300
                    ${
                      expandedIndex === idx
                        ? "opacity-100 translate-x-2"
                        : "opacity-0 translate-x-0"
                    }
                  `}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
