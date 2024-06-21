import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ClipLoader from "react-spinners/ClipLoader"; // Import the spinner

const AdminUpload = () => {
  const [courseName, setCourseName] = useState("");
  const [year, setYear] = useState("");
  const [term, setTerm] = useState("");
  const [semester, setSemester] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    // Check system preference for dark mode
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("year", year);
    formData.append("term", term);
    formData.append("semester", semester);
    formData.append("pdf", file);

    setIsLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:3000/upload/question", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("File uploaded successfully!");
        setIsError(false);
        // Clear form fields after successful upload
        setCourseName("");
        setYear("");
        setTerm("");
        setSemester("");
        setFile(null);
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
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pt-4 px-4">
        <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-white text-gray-900 border border-gray-300">
          <h2 className="text-4xl mb-6">Upload Exam Paper</h2>
          <div class="rounded-md my-4 border-l-4 border-yellow-500 bg-yellow-100 p-4">
            <div class="flex items-center justify-between space-x-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-yellow-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-yellow-600">
                  Papers will be searchable after verification by our team.
                </p>
              </div>
              <div></div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
          >
            <input
              type="text"
              placeholder="Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="rounded-lg px-4 py-2 mb-4 w-64 bg-gray-200 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
              required
            />
            <input
              type="number"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="rounded-lg px-4 py-2 mb-4 w-64 bg-gray-200 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
              required
              min="1956"
              max="2027"
            />
            <select
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="rounded-lg px-4 py-2 mb-4 w-64 bg-gray-200 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
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
              className="rounded-lg px-4 py-2 mb-4 w-64 bg-gray-200 placeholder-gray-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
              required
              min="1"
              max="8"
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="text-gray-900 mb-4"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? (
                <ClipLoader size={20} color={"#ffffff"} loading={isLoading} />
              ) : (
                "Upload"
              )}
              {/* Button text changes when loading */}
            </button>
          </form>

          {/* Message display */}
          {message && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                isError ? "bg-red-600 text-white" : "bg-green-600 text-white"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminUpload;
