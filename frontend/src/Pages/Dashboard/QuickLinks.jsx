import React from "react";
import { Link, useLocation } from "react-router-dom";

function QuickLinks() {
  const location = useLocation();

  return (
    <div className="bg-gray-900 dark:bg-gray-900 rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold text-white mb-2 pb-1">
        Quick Links
      </h2>
      <div className="">
        <ul className="flex flex-col space-y-2 ">
          <li>
            <Link
              to="/search/notes"
              className={`block py-2 px-3 text-gray-300 hover:bg-gray-700 border border-gray-700 rounded-lg p-4 hover:text-blue-500 ${
                location.pathname === "/search/notes"
                  ? "bg-blue-600 text-white"
                  : ""
              }`}
            >
              Notes
            </Link>
          </li>
          <li>
            <Link
              to="/search/pyq"
              className={`block py-2 px-3 text-gray-300 hover:bg-gray-700 border border-gray-700 rounded-lg p-4 hover:text-blue-500 ${
                location.pathname === "/search/pyq"
                  ? "bg-blue-600 text-white"
                  : ""
              }`}
            >
              Previous Year Questions (PYQs)
            </Link>
          </li>
          <li>
            <Link
              to="/attendance"
              className={`block py-2 px-3 text-gray-300 border border-gray-700 rounded-lg p-4 hover:bg-gray-700 hover:text-blue-500 ${
                location.pathname === "/attendance"
                  ? "bg-blue-600 text-white"
                  : ""
              }`}
            >
              Attendance
            </Link>
          </li>
          <li>
            <Link
              to="/calendar"
              className={`block py-2 px-3 text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-blue-500 ${
                location.pathname === "/calendar"
                  ? "bg-blue-600 text-white"
                  : ""
              }`}
            >
              Events Calendar
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className={`block py-2 px-3 text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-blue-500 ${
                location.pathname === "/community"
                  ? "bg-blue-600 text-white"
                  : ""
              }`}
            >
              Community Forum
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuickLinks;
