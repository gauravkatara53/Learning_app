import React, { useState } from "react";
import Navbar from "./Navbar";

const AdminUpload = () => {
  const [courseName, setCourseName] = useState("");
  const [year, setYear] = useState("");
  const [term, setTerm] = useState("");
  const [semester, setSemester] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("year", year);
    formData.append("term", term);
    formData.append("semester", semester);
    formData.append("pdf", file);

    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("File uploaded successfully!");
        setIsError(false);
        setCourseName("");
        setYear("");
        setTerm("");
        setSemester("");
        setFile(null);
        // Clear message after 3 seconds
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } else {
        setMessage(
          data.message ||
            "Failed to upload file. Please try again with a different filename."
        );
        setIsError(true);
      }
    } catch (error) {
      setMessage(
        "Error uploading file. Please try again with a different filename."
      );
      setIsError(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pt-4 px-4">
        <div className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-md">
          <h2 className="text-4xl text-white mb-6">Upload Exam Paper</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
          >
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
              min="1956"
              max="2027"
            />
            <select
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="dark:bg-gray-800 rounded-lg px-4 py-2 mb-4 w-64 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Term</option>
              <option value="midterm">Midterm</option>
              <option value="endterm">Endterm</option>
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
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="text-white mb-4"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Upload
            </button>
          </form>
          {message && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                isError ? "bg-red-600" : "bg-green-600"
              } text-white`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUpload;
