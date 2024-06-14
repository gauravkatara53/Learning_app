import React, { useState } from "react";

const SearchNotesForm = ({ onSearch }) => {
  const [courseName, setCourseName] = useState("");
  const [term, setTerm] = useState("");
  const [semester, setSemester] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ courseName, term, semester });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center mt-4 mx-2 bg-gray-900 p-8 rounded-lg shadow-md"
    >
      <h2 className="text-4xl text-white mb-6">Search Notes</h2>
      <input
        type="text"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        className="dark:bg-gray-800 rounded-lg px-4 py-2 mb-4 w-64 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <select
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="dark:bg-gray-800 rounded-lg px-4 py-2 mb-4 w-64 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        className="dark:bg-gray-800 rounded-lg px-4 py-2 mb-4 w-64 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        min="1"
        max="8"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchNotesForm;
