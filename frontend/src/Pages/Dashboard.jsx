import React from "react";
import Greeting from "./Dashboard/Greeting";
import News from "./Dashboard/News";
import AcademicCalendar from "./Dashboard/AcademicCalendar";
import QuickLinks from "./Dashboard/QuickLinks";
import { Link } from "react-router-dom";

function Dashboard() {
  const newsItems = [
    // ... Your newsItems array
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <Greeting />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <News newsItems={newsItems} />
        </div>
        <div>
          <AcademicCalendar />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
      </div>
    </div>
  );
}

export default Dashboard;
