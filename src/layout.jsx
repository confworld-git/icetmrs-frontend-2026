import { Outlet, Link } from "react-router-dom";
import Header from "../src/assets/components/Header/Header";
import Navigation from "../src/assets/components/Navigation/Navigation";
import Footer from "./assets/components/common/footer/footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 pt-24 lg:pt-40">
        <Outlet />
      </main>

      {/* 🔥 Floating Buttons */}
      <div className="fixed bottom-[6px] right-1/2 translate-x-1/2 -translate-y-1/2 flex gap-3 z-50 text-xs max-sm:bottom-4 max-sm:gap-2">
        {/* <a
          href="/essential-download"
          className="bg-indigo-600  text-center hover:bg-indigo-700 text-white hover:text-amber-400 px-4 py-3 rounded-full shadow-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
        >
         Quick Downloads
        </a> */}
        <a
          href="/abstract-full-paper-submission"
          className="bg-indigo-600 text-center hover:bg-indigo-700 text-white hover:text-amber-400 px-4 py-3 rounded-full shadow-lg text-sm font-semibold transition-all max-sm:text-sm whitespace-nowrap duration-300 hover:scale-105"
        >
          Submit Paper
        </a>

        <a
          href="/registration-fees"
          className="bg-indigo-600 text-center hover:bg-indigo-700 text-white hover:text-amber-400 px-4 py-3 rounded-full shadow-lg text-sm font-semibold transition-all max-sm:text-sm whitespace-nowrap duration-300 hover:scale-105"
        >
          Register Now
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
