import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminUpload = () => {
  const [courseName, setCourseName] = useState("");
  const [year, setYear] = useState("");
  const [term, setTerm] = useState("");
  const [semester, setSemester] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is logged in (replace with your own logic)
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      toast.error("You must be logged in to upload exam papers.", {
        className: "bg-red-600 text-white",
        progressClassName: "bg-white",
        closeButton: <span className="text-white">✖</span>,
        icon: (
          <svg
            className="text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        ),
      });

      setShowToast(true);

      // Navigate to sign-in page after 3 seconds
      setTimeout(() => {
        setShowToast(false);
        window.location.href = "/signin"; // Replace with your sign-in route
      }, 3000);

      return;
    }

    const { username, email } = userData;

    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("year", year);
    formData.append("term", term);
    formData.append("semester", semester);
    formData.append("pdf", file);
    formData.append("username", username); // Add username to form data
    formData.append("email", email); // Add email to form data

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/upload/question", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("File uploaded successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setCourseName("");
        setYear("");
        setTerm("");
        setSemester("");
        setFile(null);
      } else {
        toast.error(
          data.message ||
            "Failed to upload file. Please try again with a different filename.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      }
    } catch (error) {
      toast.error(
        "Error uploading file. Please try again with a different filename.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="pt-4 px-4">
        <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-white text-gray-900 border border-gray-300">
          <h2 className="text-4xl mb-6">Upload Exam Paper</h2>
          <div className="rounded-md my-4 border-l-4 border-yellow-500 bg-yellow-100 p-4">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-yellow-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-yellow-600">
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
              disabled={isLoading}
            >
              {isLoading ? (
                <ClipLoader size={20} color={"#ffffff"} loading={isLoading} />
              ) : (
                "Upload"
              )}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Footer />
    </div>
  );
};

export default AdminUpload;
