import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

export default function SessionAndPapers() {
  const conferenceSessions = [
  {
    id: "stem",
    title: "Session 1: STEM (Science, Technology, Engineering and Mathematics)",
    cover: "/images/session/session 1/session1.webp",
    
  },
  {
    id: "education",
    title: "Session 2: Education Teaching-Learning Relationship",
    cover: "/images/session/session 2/session2.webp",
    
  },
  {
    id: "life-sciences",
    title:
      "Session 3: Life Science and Innovation",
    cover: "/images/session/session 3/session3.webp",
    
  },
  {
    id: "humanities",
    title:
      "Session 4: Social Science and Humanities",
    cover: "/images/session/session 4/session4.webp",
    
  },
  {
    id: "business",
    title: "Session 5: Business and Management Studies",
    cover: "/images/session/session 5/session5.webp",
    
  },
  {
    id: "finance",
    title: "Session 6: Finance, Accountancy and Marketing",
    cover: "/images/session/session 6/session6.webp",
    
  },
  {
    id: "sports",
    title: "Session 7: Sports and Physiotherapy",
    cover: "/images/session/session 7/session7.webp",
    
  },

];
  return (
    <div className="flex justify-center  ">
      <div className="w-full mx-4">
        
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight text-center">
              Session Tracks / Call for Papers
            </h1>
        <h4 className="text-center text-[var(--color-primary)]"> 
          <b>Call for Submissions:</b> Topics of interest include, but are not
          limited to:
        </h4>
        <p className=" text-center my-5 text-gray-600">
          Explore the diverse and dynamic session tracks at ICETMRS-2026! We
          have curated a rich blend of educational and interdisciplinary
          presentations designed to inspire innovation and foster collaboration.
          Join us to engage with cutting-edge research and vibrant discussions
          spanning a wide spectrum of life sciences and healthcare topics.
        </p> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {conferenceSessions.map(({ id, cover,title }, index) => (
            <Link
              key={index}
              to={`/session-tracks-call-for-papers#${id}`}
              className="block"
            >
              <img
                className="rounded-xl hover:scale-100 duration-500 w-full h-auto object-cover  border-4 hover:ring-5 border-amber-400 ring-indigo-700                  "
                src={cover}
                alt={title}
                title={title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
      