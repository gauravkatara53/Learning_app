import { useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const SearchForm = ({ onSearch }) => {
  const [courseName, setCourseName] = useState("");
  const [year, setYear] = useState("");
  const [term, setTerm] = useState("");
  const [semester, setSemester] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);

    const handleChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading

    try {
      await onSearch({ courseName, year, term, semester });
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="pt-4 px-4">
        <form
          onSubmit={handleSubmit}
          className={`pt-8 flex flex-col items-center p-8 rounded-lg shadow-md bg-white text-gray-900`}
        >
          <h2 className="text-4xl mb-6">Search Exam Papers</h2>
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className={`rounded-lg px-4 py-2 mb-4 w-64 bg-gray-200 placeholder-gray-600 focus:ring-blue-500 focus:outline-none focus:ring-2`}
            required
          />
          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={`rounded-lg px-4 py-2 mb-4 w-64 bg-gray-200 placeholder-gray-600 focus:ring-blue-500 focus:outline-none focus:ring-2`}
            required
            min="2002"
            max="2024"
          />
          <select
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className={`rounded-lg px-4 py-2 mb-4 w-64 bg-gray-200 placeholder-gray-600 focus:ring-blue-500 focus:outline-none focus:ring-2`}
            required
          >
            <option value="" disabled className="text-gray-400">
              Select Term
            </option>
            <option value="midterm" className="text-black">
              Midterm
            </option>
            <option value="endterm" className="text-black">
              End Term
            </option>
          </select>
          <input
            type="number"
            placeholder="Semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className={`rounded-lg px-4 py-2 mb-4 w-64 bg-gray-200 placeholder-gray-600 focus:ring-blue-500 focus:outline-none focus:ring-2`}
            required
            min="1"
            max="8"
          />
          <div className="flex gap-2">
            <Link to="/notes">
              <button
                type="button"
                className={`bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400`}
              >
                Back
              </button>
            </Link>
            <button
              type="submit"
              className={`bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 16a4 4 0 110-8 4 4 0 010 8z"
                  ></path>
                </svg>
              ) : (
                "Search"
              )}
            </button>
            <Link to="/upload/pyq">
              <button
                type="button"
                className={`bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400`}
              >
                Upload
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
