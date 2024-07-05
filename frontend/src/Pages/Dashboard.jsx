import React, { useState } from "react";
import axios from "axios";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [chatGPTResponse, setChatGPTResponse] = useState("");

  const newsItems = [
    // ... Your newsItems array
  ];

  const handleSearch = async () => {
    try {
      const response = await axios.post("/api/chatgpt", { query: searchQuery });
      setChatGPTResponse(response.data.response);
    } catch (error) {
      console.error("Error fetching data from ChatGPT API:", error);
    }
  };

  return (
    <div className="overflow-x-hidden">
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-transparent outline-none text-gray-700 text-sm"
            />
            <button
              onClick={handleSearch}
              className="ml-3 bg-[#7fd0c7] hover:bg-[#1e5f81] text-white px-4 py-2 rounded-full text-sm focus:outline-none"
            >
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

      {/* ChatGPT Response */}
      {chatGPTResponse && (
        <div className="max-w-screen-xl mx-auto p-8">
          <div className="bg-gray-900 dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h2 className="text-lg font-semibold text-white mb-2">
              ChatGPT Response
            </h2>
            <div className="p-2 border border-gray-700 rounded-lg">
              <p className="text-gray-300">{chatGPTResponse}</p>
            </div>
          </div>
        </div>
      )}

      <BrowseTopics></BrowseTopics>
      <FAQSection></FAQSection>

      <div className="mt-8">
        <FooterD></FooterD>
      </div>
    </div>
  );
}

export default Dashboard;
