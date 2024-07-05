import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import ClipLoader from "react-spinners/ClipLoader"; // Import the spinner
import Navbar from "../Navbar";

const SearchNotesForm = ({ onSearch }) => {
  const [courseName, setCourseName] = useState("");
  const [term, setTerm] = useState("");
  const [semester, setSemester] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading

    try {
      await onSearch({ courseName, term, semester });
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-4 mx-2 bg-white p-8 rounded-lg shadow-md border border-gray-300"
      >
        <h2 className="text-4xl text-gray-900 mb-6">Search Notes</h2>
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="bg-white rounded-lg px-4 py-2 mb-4 w-64 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="bg-white rounded-lg px-4 py-2 mb-4 w-64 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Term</option>
          <option value="midterm">Midterm</option>
          <option value="endterm">End Term</option>
        </select>
        <input
          type="number"
          placeholder="Semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="bg-white rounded-lg px-4 py-2 mb-4 w-64 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          min="1"
          max="8"
        />
        <div className="flex gap-2">
          <Link to="/academic ">
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
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? (
              <ClipLoader size={20} color={"#ffffff"} loading={isLoading} />
            ) : (
              "Search"
            )}{" "}
            {/* Button text changes when loading */}
          </button>
          <Link to="/upload/notes">
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
  );
};

export default SearchNotesForm;
