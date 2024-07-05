import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Attendance = () => {
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");
  const [desiredAttendance, setDesiredAttendance] = useState(75);
  const [result, setResult] = useState("");

  const calculateAttendance = (e) => {
    e.preventDefault();
    const total = parseInt(totalClasses);
    const attended = parseInt(attendedClasses);
    const desired = parseFloat(desiredAttendance) / 100;
    const attendancePercentage = (attended / total) * 100;

    let resultMessage = "";
    if (isNaN(attendancePercentage)) {
      resultMessage = `
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <p>Please enter valid numbers for total classes and attended classes.</p>
        </div>
      `;
    } else if (attendancePercentage < 0 || attendancePercentage > 100) {
      resultMessage = `
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <p>Attendance percentage must be between 0 and 100.</p>
        </div>
      `;
    } else {
      if (attendancePercentage < desired * 100) {
        const requiredClasses = Math.ceil(
          (desired * total - attended) / (1 - desired)
        );
        resultMessage = `
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <p>Your attendance is ${attendancePercentage.toFixed(2)}%</p>
              <p>You need to attend ${requiredClasses} more classes to reach ${
          desired * 100
        }% attendance.</p>
          </div>
        `;
      } else {
        const maxMissableClasses = Math.floor(attended / desired - total);
        resultMessage = `
          <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <p>Your attendance is ${attendancePercentage.toFixed(2)}%</p>
              <p>You can miss ${maxMissableClasses} more classes and still maintain ${
          desired * 100
        }% attendance.</p>
          </div>
        `;
      }

      const attendanceData = {
        totalClasses: total,
        attendedClasses: attended,
        desiredAttendance: desired,
        attendancePercentage: attendancePercentage.toFixed(2),
      };
      localStorage.setItem("attendanceData", JSON.stringify(attendanceData));
    }
    setResult(resultMessage);
  };

  useEffect(() => {
    const storedAttendanceData = localStorage.getItem("attendanceData");
    if (storedAttendanceData) {
      const attendanceData = JSON.parse(storedAttendanceData);
      const resultMessage = `
        <div class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
            <p>Your previous attendance calculation:</p>
            <p>Total Classes: ${attendanceData.totalClasses}</p>
            <p>Attended Classes: ${attendanceData.attendedClasses}</p>
            <p>Desired Attendance: ${(
              attendanceData.desiredAttendance * 100
            ).toFixed(2)}%</p>
            <p>Your attendance is ${attendanceData.attendancePercentage}%</p>
        </div>
      `;
      setResult(resultMessage);
    }
  }, []);

  return (
    <div>
      <div className="bg-gray-100 text-gray-800 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-5xl mx-auto p-6">
          <div className="bg-white p-8 rounded shadow-md w-full">
            <h1 className="text-4xl font-semibold text-center mb-4">
              Attendance Calculator
            </h1>
            <div className="px-auto pb-8">
              <div class="rounded-md border-l-4 border-yellow-500 bg-yellow-100 p-4">
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-yellow-600">
                      You can enter any desired percentage you want
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <form
              id="attendanceForm"
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
              onSubmit={calculateAttendance}
            >
              <div>
                <label
                  htmlFor="totalClasses"
                  className="block text-lg font-bold mb-2"
                >
                  Total Current Classes:
                </label>
                <input
                  type="number"
                  id="totalClasses"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:ring focus:border-blue-300 text-gray-800 text-lg"
                  placeholder="Enter total classes"
                  value={totalClasses}
                  onChange={(e) => setTotalClasses(e.target.value)}
                  required
                  min="1"
                />
              </div>
              <div>
                <label
                  htmlFor="attendedClasses"
                  className="block text-lg font-bold mb-2"
                >
                  Attended Classes:
                </label>
                <input
                  type="number"
                  id="attendedClasses"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:ring focus:border-blue-300 text-gray-800 text-lg"
                  placeholder="Enter attended classes"
                  value={attendedClasses}
                  onChange={(e) => setAttendedClasses(e.target.value)}
                  required
                  min="0"
                />
              </div>
              <div>
                <label
                  htmlFor="desiredAttendance"
                  className="block text-lg font-bold mb-2"
                >
                  Desired Attendance (%):
                </label>
                <input
                  type="number"
                  id="desiredAttendance"
                  className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:ring focus:border-blue-300 text-gray-800 text-lg"
                  value={desiredAttendance}
                  onChange={(e) => setDesiredAttendance(e.target.value)}
                  placeholder="Enter desired attendance %"
                  required
                  min="0"
                  max="100"
                />
              </div>
              <div className="md:col-span-3 flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-1/3 text-lg"
                >
                  Calculate
                </button>
              </div>
            </form>
            <div
              id="result"
              className="mt-6 text-lg"
              dangerouslySetInnerHTML={{ __html: result }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Attendance;
