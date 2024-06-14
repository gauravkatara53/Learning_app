import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const SearchForm = ({ onSearch }) => {
  const [courseName, setCourseName] = useState("");
  const [year, setYear] = useState("");
  const [term, setTerm] = useState("");
  const [semester, setSemester] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ courseName, year, term, semester });
  };

  return (
    <>
      <div className="pt-4 px-4">
        <form
          onSubmit={handleSubmit}
          className=" pt-8 flex flex-col  items-center bg-gray-900 p-8 rounded-lg shadow-md"
        >
          <h2 className="text-4xl text-white mb-6">Search Exam Papers</h2>
          <input
            type="text"
            placeholder="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="dark:bg-gray-800 rounded-lg px-4 py-2 mb-4 w-64 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="dark:bg-gray-800 rounded-lg px-4 py-2 mb-4 w-64 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min="2002"
            max="2024"
          />
          <select
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="dark:bg-gray-800 rounded-lg px-4 py-2 mb-4 w-64 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
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
            className="dark:bg-gray-800 rounded-lg px-4 py-2 mb-4 w-64 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min="1"
            max="8"
          />
          <div className="flex gap-2">
            <Link to="/">
              <button
                type="button"
                className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Back
              </button>
            </Link>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
            <Link to="/upload">
              <button
                type="button"
                className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
