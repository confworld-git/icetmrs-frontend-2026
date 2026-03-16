export default function Proceedings() {
  const proceeding_logo = [
    "/images/logo/scopus-logo.webp",
    "/images/logo/sjr-logo.webp",
    // "/images/logo/clarivate-analytics-and-web-of-science2.webp",
  ];
  return (
    <>
      <div className="flex justify-center bg-indigo-800 mb-12 text-shadow-2xs rounded-2xl mx-4 md:mx-24">
        <div className="">
          <div className="p-5 md:p-10 lg:pt-20">
            <h2 className="text-center text-3xl font-bold text-white">
              Proceedings & Publications
            </h2>
            <div className="flex flex-wrap justify-center gap-2 p-10">
              {proceeding_logo.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt=""
                  width={150}
                  height={200}
                  loading="lazy"
                  className="rounded-xl"
                />
              ))}
            </div>
            <div className="bg-amber-400 rounded-lg">
        <p className="m-10 p-2 font-semibold text-sm text-center">
          <b>Note: </b>ICETMRS - 2026 Proceedings will be submitted to the Web
          of science Book citation index (BkCI) and Scopus for evaluation and
          indexing purposes (T&C)* apply. 
        </p>
      </div>
          </div>
        </div>
      </div>
    </>
  );
}
