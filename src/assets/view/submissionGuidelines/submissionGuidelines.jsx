import Hero from "../../components/common/common-hero/common-hero";
export default function SubmissionGuidelines() {
  const abstractGuidelines = [
    "The original work should be described in the abstract.",
    "Abstract should be written in English.",
    "It should be one paragraph with a word limit of 150.",
    "Please provide a slight biography with your abstract (An example is given in the template).",
    "The abstract should be submitted in the format of an MS Word (.doc or .docx) document.",
    "After you've finished preparing your abstract according to the above instructions, submit your abstract here.",
    "After submission, you will be acknowledged of the receipt of the abstract via email within three working days.",
    "The Title, Author's Names and Affiliations should be centred. Please underline the presenting author. Corresponding author E-mail should be there."
  ];

  const fullPaperGuidelines = [
    "Total number of pages must be 6-8 in double-column format.",
    "The manuscript should be in English and checked for grammar and language errors.",
    "Tables, figures and images should be properly named with good quality.",
    "The Title, Author's Names and Affiliations should be centred. Please underline the presenting author. Corresponding author E-mail should be there.",
    "Abstract not more than 150 words",
    "Minimum 5 Keywords should be written in lowercase letters and italics (Not applicable to names/scientific names) and should be separated with commas.",
    "Names of affiliations should be given including the country.",
    "Background/Introduction, Motivation and Objectives.",
    "Statement of Contribution/Methods.",
    "Results, Discussion and Conclusion.",
    "Funding statement.",
    "Acknowledgements.",
    "References minimum 35 (30% of which must be within the last 2 years) should be there. Authors may submit their references in Chicago style. Authors are responsible for ensuring that the information in each reference is complete and accurate. All references should be numbered consecutively in the order of their first citation. Citations of references in the text should be identified using numbers in square brackets e.g., \"as discussed by Smith [9]\"; \"as discussed elsewhere [9, 10]\". All references should be cited within the text and uncited references will be removed.",
    "The paper should be submitted in the format of an MS Word (.doc or .docx) document.",
    "After you've finished preparing your full paper according to the above instructions, submit your full paper here."
  ];

  return (
    <section>
      <Hero
              title="Submission Guidelines"
              breadcrumbs={[{ label: "Home", link: "#" }]}
              backgroundImage="/images/commonhero/9.webp"
            />
<div className="bg-white">
      
      

      <div className="w-full px-4 py-12">
        
        {/* Abstract Section */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left - Title Card */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <div className="bg-indigo-600 rounded-3xl p-10 text-white h-full">
                  <div className="text-6xl mb-6">📝</div>
                  <h2 className="text-4xl font-black mb-4">Abstract Submission</h2>
                  <p className="text-indigo-100 text-lg mb-8">
                    Submit your research abstract following these guidelines
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-amber-400 text-sm font-semibold mb-2">Word Limit</div>
                    <div className="text-4xl font-black">150</div>
                    <div className="text-indigo-200 text-sm">words maximum</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Guidelines */}
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {abstractGuidelines.map((guideline, idx) => (
                  <div key={idx} className="group bg-white border-l-4 border-indigo-600 p-6 rounded-r-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-sm">{idx + 1}</span>
                      </div>
                      <p className="text-gray-800 text-lg leading-relaxed flex-1">{guideline}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a 
                  href="/abstract-full-paper-submission" 
                  className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Submit Abstract
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gray-200"></div>
          <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Full Paper Section */}
        <div>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left - Guidelines */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="space-y-3">
                {fullPaperGuidelines.map((guideline, idx) => (
                  <div key={idx} className="group bg-white border-l-4 border-amber-400 p-6 rounded-r-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <span className="text-amber-600 font-bold text-sm">{idx + 1}</span>
                      </div>
                      <p className="text-gray-800 text-lg leading-relaxed flex-1">{guideline}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a 
                  href="/abstract-full-paper-submission" 
                  className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-indigo-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Submit Full Paper
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right - Title Card */}
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="lg:sticky lg:top-8">
                <div className="bg-amber-400 rounded-3xl p-10 text-indigo-900 h-full">
                  <div className="text-6xl mb-6">📄</div>
                  <h2 className="text-4xl font-black mb-4">Full Paper Submission</h2>
                  <p className="text-indigo-800 text-lg mb-8">
                    Submit your complete research paper following these guidelines
                  </p>
                  <div className="bg-indigo-900 rounded-2xl p-6">
                    <div className="text-amber-300 text-sm font-semibold mb-2">Page Limit</div>
                    <div className="text-4xl font-black text-white">6-8</div>
                    <div className="text-amber-100 text-sm">pages (double-column)</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
    </section>
    
  );
}