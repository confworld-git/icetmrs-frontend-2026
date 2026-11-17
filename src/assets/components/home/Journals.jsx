import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ConferenceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

const publications = [
  {
    type: "Research article • Restricted access",
    title:
      "Exploring the Interplay Between Parenting Style, Dark Triad, Cultural Capitaland Internet Addiction Disorders of College Students: A Cross-Cultural CBD Framework Analysis",
    authors:
      "Jing Qiaoqiao, Muzi Li, Chew Fong Peng, Chan Wai Yin and Rusdi Abd Rashid",
    presentedAt: "ICSTEET-2025",
    publication: "Applied Research in Quality of Life",
    quartile: "Q1",
    indexing: "Scopus, SSCI",
    publisher: "Springer",
    year: "2026",
    doi: "https://link.springer.com/article/10.1007/s11482-026-10592-9",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Women’s Economic Empowerment in Dhaka: Overcoming Gender-Based Challenges in Banking and Finance",
    authors: "Rumpa Neogi, Arnab Bhattacharjee, Tanushree Biswas",
    presentedAt: "WCMRP-2025",
    publication: "Human Arenas",
    quartile: "Q1",
    indexing: "Scopus, ESCI",
    publisher: "Springer",
    year: "2026",
    doi: "https://doi.org/10.1007/s42087-026-00573-7",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Beyond Fragmented Leadership Models: A Conceptual Integrated Theory of Leadership Effectiveness in a VUCA World",
    authors: "Millicent Lindiwe Ndaba, S. Sivakumar",
    presentedAt: "ICETMRS-2025",
    publication: "Human Arenas",
    quartile: "Q1",
    indexing: "Scopus, ESCI",
    publisher: "Springer",
    year: "2026",
    doi: "https://link.springer.com/article/10.1007/s42087-026-00615-0",
  },
  {
    type: "Research article • Restricted access",
    title:
      "From trend to strategic practices: a bibliometric analysis of knowledge management in communications and multimedia-related sectors",
    authors:
      "Aidawati Abd Rahman, Norasyikin Shaikh Ibrahim, Rohaizan Daud, Min Hui Leow",
    presentedAt: "WCMRP-2026",
    publication: "Quality & Quantity",
    quartile: "Q1",
    indexing: "Scopus",
    publisher: "Springer",
    year: "2026",
    doi: "https://link.springer.com/article/10.1007/s11135-026-02831-w",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Evaluating the influence of courseware on online learning pedagogy at Pangasinan State University.",
    authors: "Angelou O Ramos",
    publication: "E-Learning and Digital Media",
    quartile: "Q2",
    indexing: "Scopus, ESCI",
    publisher: "SAGE",
    year: "2025",
    doi: "https://journals.sagepub.com/doi/abs/10.1177/20427530251343208",
  },
  {
    type: "Research article • Restricted access",
    title:
      "The assessment SHIFT: Traditional and technology-driven approaches to listening comprehension.",
    authors: "Johnedel Barrota Peralta",
    publication: "E-Learning and Digital Media",
    quartile: "Q2",
    indexing: "Scopus, ESCI",
    publisher: "SAGE",
    year: "2025",
    doi: "https://journals.sagepub.com/doi/10.1177/20427530251348607",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Redefining educational success: Analyzing the impact of closed management systems on student well-being and academic performance in Chinese technical education.",
    authors: "Jingkun Liu, Rovena I Dellova and Zhengxin Yi",
    publication: "E-Learning and Digital Media",
    quartile: "Q2",
    indexing: "Scopus, ESCI",
    publisher: "SAGE",
    year: "2024",
    doi: "https://doi.org/10.1177/20427530241299032",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Mechanism of PI3K-AKT Signaling Pathway Mediating Apoptosis of Periodontal Tissue Cells in Chronic Periodontitis",
    authors:
      "Lan Dazhi, Pimporn Thongmuang, Sarisak Soontornchai, You Jianpeng",
    presentedAt: "WCMRP-2025",
    publication: "International Journal of Environmental Sciences",
    quartile: "Q4",
    indexing: "Scopus",
    publisher: "Elsevier",
    year: "2024",
    doi: "https://doi.org/10.64252/hp3vmy81",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Zeolite X from coal fly ash inhibits proliferation of human breast cancer cell lines (MCF-7) via induction of S phase arrest and apoptosis",
    authors: "S. Subhapriya and P. Gomathipriya",
    publication: "Molecular Biology Reports",
    quartile: "Q2",
    indexing: "Scopus, SCIE",
    publisher: "Springer",
    year: "2018",
    doi: "https://doi.org/10.1007/s11033-018-4363-9",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Induction of apoptotic effects of anti-proliferative zeolite X from coal fly ash on cervical cancer (HeLa) cell lines",
    authors: "S. Subhapriya and P. Gomathipriya",
    publication: "Molecular Biology Reports",
    quartile: "Q2",
    indexing: "Scopus, SCIE",
    publisher: "Springer",
    year: "2018",
    doi: "https://doi.org/10.1007/s11033-018-4363-9",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Green synthesis of titanium dioxide (TiO2) nanoparticles by Trigonella foenum-graecum extract and its antimicrobial properties",
    authors: "S. Subhapriya and P. Gomathipriya",
    publication: "Microbial Pathogenesis",
    quartile: "Q1",
    indexing: "Scopus, SCIE",
    publisher: "Elsevier",
    year: "2018",
    doi: "https://doi.org/10.1016/j.micpath.2018.01.027",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Surfactant-free bio-synthesised TiO2 nanorods from Turbinaria conoides – A study on photocatalytic and anti-bacterial activity",
    authors: "S. Subhapriya and P. Gomathipriya",
    publication: "Materials Research Express",
    quartile: "Q2",
    indexing: "Scopus, SCIE",
    publisher: "IOP",
    year: "2018",
    doi: "https://iopscience.iop.org/article/10.1088/2053-1591/aac3bc",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Synthesis and characterization of zeolite X from coal fly ash: a study on anticancer activity",
    authors: "S. Subhapriya and P. Gomathipriya",
    publication: "Materials Research Express",
    quartile: "Q2",
    indexing: "Scopus, SCIE",
    publisher: "IOP",
    year: "2018",
    doi: "https://iopscience.iop.org/article/10.1088/2053-1591/aad16c",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Design and analysis of high gain and low noise figure CMOS low noise amplifier for Q-band nano-sensor application",
    authors: "K Suganthi and S Malarvizhi",
    publication: "Materials Research Express",
    quartile: "Q2",
    indexing: "Scopus, SCIE",
    publisher: "IOP",
    year: "2018",
    doi: "https://iopscience.iop.org/article/10.1088/2053-1591/aaafea",
  },
  {
    type: "Research article • Restricted access",
    title:
      "Detection and classification of cardiovascular abnormalities using FFT based multi-objective genetic algorithm",
    authors: "B. V. P Prasad and Velusamy Parthasarathy",
    publication: "Biotechnology & Biotechnological Equipment",
    quartile: "Q2",
    indexing: "Scopus, SCIE",
    publisher: "Taylor & Francis",
    year: "2017",
    doi: "https://doi.org/10.1080/13102818.2017.1389303",
  },
];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === publications.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? publications.length - 1 : prevIndex - 1,
    );
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]); // Re-create interval when currentIndex changes

  return (
    <div className="py-8 md:py-10 bg-indigo-600 flex flex-col items-center justify-center px-4 md:px-8">
      {/* Header */}
      <div className=" w-full mb-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Participate in ICETMRS-2026 and Achieve Scopus / SCIE Indexed
          Publication
        </h1>
        <p className="text-base md:text-lg text-white leading-relaxed">
          ICETMRS-2026 offers a valuable opportunity for researchers to present
          their work and achieve publication in reputed
          <br /> Scopus / SCIE indexed journals.{" "}
          <b>Selected high-quality papers</b> presented at the conference will
          be recommended and processed for legitimate{" "}
          <b>Scopus / SCIE indexed journal publication</b>, ensuring global
          academic visibility and recognition through one of the world's most
          trusted indexing databases.
        </p>
      </div>

      {/* Proof of Scopus Indexing Section */}
      <div className="max-w-4xl w-full mb-4">
        <h2 className="text-2xl font-bold text-white text-center mb-1">
          Proof of Scopus / SCIE Indexing
        </h2>
        <p className="text-sm md:text-base text-white text-center mb-2">
          Publication Success Story
        </p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-3xl w-full relative">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 min-h-[350px] flex flex-col justify-between transition-all duration-500">
          <div className="space-y-4 text-left">
            <div className="text-[#4F39F6] text-xs md:text-sm font-bold tracking-wider">
              Research article • Restricted Access
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-indigo-955 leading-tight">
              {publications[currentIndex].title}
            </h3>

            <div className="space-y-1.5 text-sm md:text-base text-indigo-955">
              <div>
                <span className="font-bold text-indigo-950">Authors: </span>
                <span className="text-indigo-850 font-normal">
                  {publications[currentIndex].authors}
                </span>
              </div>
              {publications[currentIndex].presentedAt && (
                <div>
                  <span className="font-bold text-indigo-950">
                    Presented at:{" "}
                  </span>
                  <span className="text-indigo-850 font-normal">
                    {publications[currentIndex].presentedAt}
                  </span>
                </div>
              )}
              <div>
                <span className="font-bold text-indigo-950">Journal: </span>
                <span className="text-indigo-850 font-normal">
                  {publications[currentIndex].publication}
                </span>
              </div>
              {publications[currentIndex].quartile && (
                <div>
                  <span className="font-bold text-indigo-950">Quartile: </span>
                  <span className="text-indigo-850 font-normal">
                    {publications[currentIndex].quartile}
                  </span>
                </div>
              )}
              {publications[currentIndex].indexing && (
                <div>
                  <span className="font-bold text-indigo-950">Indexing: </span>
                  <span className="text-indigo-850 font-normal">
                    {publications[currentIndex].indexing}
                  </span>
                </div>
              )}
              {publications[currentIndex].publisher && (
                <div>
                  <span className="font-bold text-indigo-950">Publisher: </span>
                  <span className="text-indigo-850 font-normal">
                    {publications[currentIndex].publisher}
                  </span>
                </div>
              )}
              <div>
                <span className="font-bold text-indigo-950">Year: </span>
                <span className="text-indigo-850 font-normal">
                  {publications[currentIndex].year}
                </span>
              </div>
              {publications[currentIndex].doi && (
                <div className="break-all">
                  <span className="font-bold text-indigo-950">DOI: </span>
                  <a
                    href={publications[currentIndex].doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-normal hover:underline"
                  >
                    {publications[currentIndex].doi}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {publications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#4F39F6] w-8"
                    : "bg-blue-200 hover:bg-blue-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white text-[#4F39F6] p-3 rounded-full transition-all shadow-md flex items-center justify-center hover:scale-105"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white text-[#4F39F6] p-3 rounded-full  transition-all shadow-md flex items-center justify-center hover:scale-105"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl w-full mt-4 text-center">
        <p className="text-lg md:text-xl text-white font-semibold">
          Join us and publish in Scopus / SCIE indexed journals.
        </p>
      </div>
    </div>
  );
}
