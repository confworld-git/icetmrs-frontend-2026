"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Hero from "../../components/common/common-hero/common-hero";

const OrganizingCommitteeMembers = () => {
  const [loading, setLoading] = useState(true);
  const [committeeMembers, setCommitteeMembers] = useState({}); // Renamed for clarity

  // Reusing the SpeakerSkeleton structure but adjusted for this component's needs
  const CommitteeMemberSkeleton = () => (
    <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-sm animate-pulse flex flex-col items-center">
      {/* Adjusted for a more square/rounded image placeholder if needed, or keep circular */}
      <div className="w-48 h-48 bg-gray-300 rounded-full mb-6"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  );

  useEffect(() => {
    const fetchCommitteeMembers = async () => {
      // Renamed for clarity
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate longer load
        const res = await axios.get(
          import.meta.env.VITE_API_URL +
            "/speaker?s=Scientific Committee,Review Committee"
        );
        if (res.status === 200 && res.data.data) {
          const newMembers = {};
          res.data.data.forEach((element) => {
            if (element._id) {
              // Assuming you might want to sort these members by a 'position' or 'order' property too
              // If not, you can remove the .sort() part
              newMembers[element._id] = element.speakers.sort(
                (a, b) => a.position - b.position
              );
            }
          });
          setCommitteeMembers(newMembers); // Set to committeeMembers state
        }
      } catch (error) {
        console.error("Error fetching committee members:", error);
        // Optionally add an error state here to display a message to the user
      } finally {
        setLoading(false);
      }
    };
    fetchCommitteeMembers();
  }, []);

  const renderSection = (title) => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-8 text-center">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center border-b-4 border-indigo-500 p-8 bg-indigo-50 rounded-xl shadow-inner">
        {loading
          ? Array(4) // Display 4 skeletons while loading
              .fill(null)
              .map((_, index) => <CommitteeMemberSkeleton key={index} />)
          : Array.isArray(committeeMembers[title]) &&
            committeeMembers[title].length > 0
          ? committeeMembers[title].map((member, index) => (
              <div
                className="w-full max-w-sm flex flex-col items-center bg-white shadow-xl rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                key={index}
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg mb-6">
                  <img
                    loading="lazy"
                    alt={member.Name}
                    className="w-full h-full object-cover object-top" // object-top helps if faces are at the top of the image
                    src={`${import.meta.env.VITE_API_URL}/image/${
                      member.Image
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.Name}
                  </h2>
                  <div className="text-gray-700 text-base leading-relaxed space-y-1 max-h-36 overflow-y-auto custom-scrollbar">
                    {Array.isArray(member.About) &&
                      member.About.map((item, idx) => <p key={idx}>{item}</p>)}
                  </div>
                </div>
              </div>
            ))
          : !loading && (
              <p className="col-span-full text-gray-600 italic text-lg text-center py-8">
                Information about our {title} will be updated soon.
              </p>
            )}
      </div>
      {/* No separator div after each section if it's handled by border-b-4 of the grid container */}
    </div>
  );

  return (
    <section>
      <Hero
        title="Organizing Committee"
        breadcrumbs={[{ label: "Home", link: "#" }]}
        backgroundImage="/images/commonhero/4.webp"
      />
      <section className="min-h-screen bg-gray-100 py-8">
        {" "}
        {/* Added some top/bottom padding to the section */}
        {/* <Helmet>
        <title>
          ICLSMHA 2026 Organizing Committee | Scientific & Review Members
        </title>
        <meta
          name="description"
          content="Meet the Organizing Committee of ICLSMHA 2026, including the Scientific Committee and Review Committee. Learn more about the experts guiding our international healthcare and research conference."
        />
        <meta
          name="keywords"
          content="ICLSMHA 2026 organizing committee, scientific committee, review committee, conference committee members, healthcare research committee"
        />
        <link 
          rel="canonical" 
          href="https://iclsmha.cerada.in/organizing-committee-member" 
        />
        <meta name="robots" content="index, follow" />

      </Helmet> */}
        <div className="container mx-auto px-4">
          {renderSection("Scientific Committee")}
          {renderSection("Review Committee")}

          {/* Applying section styling to the "Applying for" link container for consistency */}
          <div className="container mx-auto px-4 py-8 text-center bg-white shadow-md rounded-xl mt-8">
            <p className="text-xl font-medium text-gray-700">
              <a
                href="/organizing-committee-member-form"
                className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200"
              >
                Apply
              </a>{" "}
              for Organizing Committee Members
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OrganizingCommitteeMembers;
