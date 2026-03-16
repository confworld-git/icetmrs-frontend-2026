import { useState, useEffect } from "react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-11-16T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-amber-50 overflow-hidden">
        {/* Simple Wave Background */}
        <div className="absolute inset-0">
          <svg
            className="absolute bottom-0 left-0 w-full h-64 opacity-10"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#4f46e5"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="absolute top-0 right-0 w-full h-64 opacity-10 transform rotate-180"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#f59e0b"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="z-10 w-full px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 py-4 lg:py-8">
              {/* Main Title */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-800">
                2<sup>nd</sup> International Conference on Emerging Trends in Multidisciplinary
                Research Studies
                <span className="text-lg sm:text-xl lg:text-3xl text-amber-500 mt-2">
                  {" "}
                  (ICETMRS-2026)
                </span>
              </h1>

              {/* Theme */}
              <div className="flex flex-col">
                <p className="text-base sm:text-lg">
                  <span className="font-bold">Theme: </span>
                  <span className="font-semibold">
                    "Sustainable Learning Through Multidisciplinary Research and
                    Technological Innovation"
                  </span>
                </p>
                <p className="text-base sm:text-lg font-semibold text-amber-600">
                  Hybrid Conference: In Person + Online
                </p>
                <p className="text-base sm:text-lg">
                  <span className="font-bold">Organized by: </span>
                  <span className="font-semibold">
                    Confworld Educational Research and Development Association
                  </span>
                </p>
                <p className="text-base sm:text-lg font-bold text-gray-900">
                  <span className="font-bold">ISBN: </span>
                  <span className="font-semibold">978-37-977929-3-8</span>
                </p>
              </div>

              {/* Conference Details - Simple Modern Cards */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4">
                {/* Date Card */}
                <div className="flex items-center gap-3 bg-indigo-600 px-4 py-3 rounded-xl shadow-md border-l-4 border-indigo-600 hover:shadow-lg transition-shadow">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-200 font-medium block">
                      Date
                    </span>
                    <p className="text-sm sm:text-base font-bold text-white">
                      16–17 Nov, 2026
                    </p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-3 bg-amber-500 px-4 py-3 rounded-xl shadow-md border-l-4 border-amber-500 hover:shadow-lg transition-shadow">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <svg
                      className="w-5 h-5 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-gray-200 font-medium block">
                      Location
                    </span>
                    <p className="text-sm sm:text-base font-bold text-white">
                      Istanbul, Turkey
                    </p>
                  </div>
                </div>
              </div>

              {/* Simple Elegant Countdown */}
              <div className="flex justify-center md:justify-start">
                <div className=" px-4">
                  <div className="flex gap-4 sm:gap-6">
                    {[
                      { label: "Days", value: timeLeft.days, color: "indigo" },
                      {
                        label: "Hours",
                        value: timeLeft.hours,
                        color: "indigo",
                      },
                      {
                        label: "Minutes",
                        value: timeLeft.minutes,
                        color: "amber",
                      },
                      {
                        label: "Seconds",
                        value: timeLeft.seconds,
                        color: "amber",
                      },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`text-3xl sm:text-4xl font-bold text-${item.color}-500 mb-1`}
                        >
                          {item.value.toString().padStart(2, "0")}
                        </div>
                        <span className="text-xs text-violet-500 font-medium uppercase tracking-wide">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Video */}
            <div className="flex justify-center lg:justify-end py-6 lg:py-0">
              <div className="relative w-full max-w-lg lg:max-w-none">
                {/* Mobile Video */}
                <div className="lg:hidden w-full aspect-video overflow-hidden border-2 border-indigo-800 shadow-lg">
                  <video
                    src="/videos/icetmrs-hero-video.webm"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                  />
                </div>

                {/* Desktop Video */}
                <div className="hidden py-12 lg:block w-full h-[500px] mx-auto">
                  <div className="w-full mx-auto h-auto bg-gradient-to-br from-indigo-700 to-indigo-600 rounded-2xl shadow-2xl p-1">
                    <div className="w-full h-auto bg-indigo-800 overflow-hidden ring-2 ring-amber-400 ring-offset-2 ring-offset-indigo-700">
                      <video
                        src="/videos/icetmrs-hero-video.webm"
                        className="w-full h-auto object-fit"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
