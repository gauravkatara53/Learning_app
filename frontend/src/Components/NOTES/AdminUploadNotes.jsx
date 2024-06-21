import React, { useState } from "react";
import Footer from "../Footer";
import ClipLoader from "react-spinners/ClipLoader"; // Import the spinner
import Navbar from "../Navbar";

const AdminUploadNotes = () => {
  const [courseName, setCourseName] = useState("");
  const [term, setTerm] = useState("");
  const [semester, setSemester] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("term", term);
    formData.append("semester", semester);
    formData.append("pdf", file);

    setIsLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:3000/upload/note", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("File uploaded successfully!");
        setIsError(false);
        setCourseName("");
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
      <Navbar></Navbar>
      <div className="flex flex-col mt-4 mx-2 items-center bg-white p-8 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-4xl text-gray-900 mb-6">Upload Notes</h2>
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
                Notes will be searchable after verification by our team.
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
            <option value="endterm">Endterm</option>
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
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="text-gray-900 mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? (
              <ClipLoader size={20} color={"#ffffff"} loading={isLoading} />
            ) : (
              "Upload"
            )}{" "}
            {/* Button text changes when loading */}
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
      <Footer></Footer>
    </div>
  );
};

export default AdminUploadNotes;
