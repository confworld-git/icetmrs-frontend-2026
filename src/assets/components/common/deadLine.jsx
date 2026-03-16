import React, { useState } from 'react';

export default function SubmissionDeadlines() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const deadlines = [
    {
      title: "Early Bird Registration",
      day: "31",
      suffix: "st",
      month: "Mar",
      year: "2026",
    },
    {
      title: "Abstract Submission",
      day: "1",
      suffix: "st",
      month: "Apr",
      year: "2026",
    },
    {
      title: "Full Paper Submission",
      day: "30",
      suffix: "th",
      month: "Apr",
      year: "2026",
    },
    {
      title: "Final Registration",
      day: "31",
      suffix: "st",
      month: "May",
      year: "2026",
    }
  ];

  return (
    <div className="w-full px-6 md:px-12 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight text-center">
              Submission Deadlines
            </h1>
        </div>

        {/* Calendar Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deadlines.map((deadline, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              {/* Calendar Card */}
              <div className={`
                bg-white rounded-2xl overflow-hidden border-4 shadow-lg transition-all duration-300
                ${hoveredIndex === idx 
                  ? idx % 2 === 0 ? 'border-indigo-600 shadow-2xl' : 'border-amber-400 shadow-2xl'
                  : 'border-gray-900'
                }
              `}>
                {/* Top Rings */}
                <div className="relative bg-gray-900 pt-3 pb-2">
                  <div className="flex justify-around px-8">
                    <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                  </div>
                </div>

                {/* Header - Title with Icon */}
                <div className={`
                  py-6 px-4 text-center font-bold text-lg text-white transition-colors duration-300
                  ${idx % 2 === 0 ? 'bg-indigo-600' : 'bg-amber-400'}
                `}>
                  <div className="flex flex-col items-center gap-3">
                    {/* Icon */}
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {idx === 0 && (
                        // Rocket/Early Bird icon
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      )}
                      {idx === 1 && (
                        // Document/Abstract icon
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      )}
                      {idx === 2 && (
                        // Paper/Document Stack icon
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      )}
                      {idx === 3 && (
                        // Calendar Check icon
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      )}
                    </svg>
                    <span>{deadline.title}</span>
                  </div>
                </div>

                {/* Date Section - White Background */}
                <div className="bg-white py-10 px-6 text-center">
                  <div className="mb-2">
                    <span className={`
                      font-black leading-none transition-colors duration-300
                      ${hoveredIndex === idx
                        ? idx % 2 === 0 ? 'text-indigo-600' : 'text-amber-400'
                        :'text-indigo-600'
                      }
                    `}
                    style={{ fontSize: '4rem' }}>
                      {deadline.day}
                    </span>
                    <span className={`
                      font-bold align-top ml-1 transition-colors duration-300
                      ${hoveredIndex === idx
                        ? idx % 2 === 0 ? 'text-indigo-600' : 'text-amber-400'
                        : 'text-gray-600'
                      }
                    `}
                    style={{ fontSize: '2rem' }}>
                      {deadline.suffix}
                    </span>
                  </div>
                  
                  <div className="text-2xl font-bold text-gray-800">
                    {deadline.month} {deadline.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}