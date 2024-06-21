import React, { useState } from "react";
import Greeting from "./Dashboard/Greeting";
import News from "./Dashboard/News";
import AcademicCalendar from "./Dashboard/AcademicCalendar";
import QuickLinks from "./Dashboard/QuickLinks";
import { Link } from "react-router-dom";
import FooterD from "./Dashboard/Footerd";
import BrowseTopics from "./Dashboard/ BrowseTopics";
import FAQSection from "./Dashboard/ FAQSection";
import Navbar from "../Components/Navbar";

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("custom1");

  const newsItems = [
    // ... Your newsItems array
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar></Navbar>
      <div
        style={{
          background: "hsla(201, 66%, 30%, 1)",
          backgroundImage:
            "linear-gradient(360deg, hsla(201, 66%, 30%, 1) 0%, hsla(178, 37%, 59%, 1) 100%)",
          background:
            "-moz-linear-gradient(360deg, hsla(201, 66%, 30%, 1) 0%, hsla(178, 37%, 59%, 1) 100%)",
          background:
            "-webkit-linear-gradient(360deg, hsla(201, 66%, 30%, 1) 0%, hsla(178, 37%, 59%, 1) 100%)",
        }}
        className="pt-10 flex flex-col justify-center items-center rounded-b-3xl"
      >
        <section className="text-center px-8 text-white">
          <h1 className="text-6xl font-black mb-4">Discover. Learn. Enjoy.</h1>
          <h6 className="text-2xl font-black mb-8">
            Platform for creatives around the world
          </h6>
          <div className="flex items-center bg-white rounded-full px-4 py-3 mx-4 max-w-xl shadow-md">
            <div className="mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C16.5228 19 20 15.5228 20 11C20 6.47715 16.5228 3 11 3C5.47715 3 2 6.47715 2 11C2 15.5228 5.47715 19 11 19Z"
                  stroke="#718096"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 17L13.5 13.5"
                  stroke="#718096"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Notes, PYQ's, Courses, more ..."
              className="flex-grow bg-transparent outline-none text-gray-700 text-sm"
            />
            <button className="ml-3 bg-[#7fd0c7] hover:bg-[#1e5f81] text-white px-4 py-2 rounded-full text-sm focus:outline-none">
              Search
            </button>
          </div>
        </section>

        <div className="max-w-screen-xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <News newsItems={newsItems} />
          </div>
          <div className="col-span-1">
            <AcademicCalendar />
          </div>
        </div>
      </div>

      {/* <div className="max-w-screen-xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <QuickLinks />
        <div className="bg-gray-900 dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
          <h2 className="text-lg font-semibold text-white mb-2">
            Featured Content
          </h2>
          <div className="p-2 border border-gray-700 rounded-lg">
            <p className="text-gray-300">
              Check out our latest webinar on AI in Education and register now
              to secure your spot!
            </p>
            <Link
              to="/webinar"
              className="block mt-2 py-1 px-3 text-blue-500 rounded hover:bg-gray-700 hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div> */}

      {/* New Section with Tabs */}

      <BrowseTopics></BrowseTopics>
      <FAQSection></FAQSection>

      <FooterD></FooterD>
    </div>
  );
}

export default Dashboard;
