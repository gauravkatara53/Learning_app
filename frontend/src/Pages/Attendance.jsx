import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

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
      <div className="bg-black text-white flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md mx-auto p-4">
          <div className="bg-black p-8 rounded shadow-md w-full">
            <h1 className="text-4xl font-semibold text-center mb-2">
              Attendance Calculator
            </h1>
            <p className="text-center text-gray-400 mb-8">
              You can enter any desired percentage you want
            </p>
            <form
              id="attendanceForm"
              className="space-y-6"
              onSubmit={calculateAttendance}
            >
              <div>
                <label
                  htmlFor="totalClasses"
                  className="block text-lg font-bold mb-2"
                >
                  Total Classes:
                </label>
                <input
                  type="number"
                  id="totalClasses"
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-black text-white text-lg"
                  placeholder="Enter total classes"
                  value={totalClasses}
                  onChange={(e) => setTotalClasses(e.target.value)}
                  required
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
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-black text-white text-lg"
                  placeholder="Enter attended classes"
                  value={attendedClasses}
                  onChange={(e) => setAttendedClasses(e.target.value)}
                  required
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
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline bg-black text-white text-lg"
                  value={desiredAttendance}
                  onChange={(e) => setDesiredAttendance(e.target.value)}
                  placeholder="Enter desired attendance %"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full text-lg"
              >
                Calculate
              </button>
            </form>
            <div
              id="result"
              className="mt-6 text-lg"
              dangerouslySetInnerHTML={{ __html: result }}
            />
          </div>
          <div className="flex justify-center mt-8">
            <p className="text-gray-400">Made with ❤️ and code by &nbsp;</p>
            <p>
              <a
                className="font-bold text-blue-400"
                href="https://github.com/gauravkatara53/attendance_calculator"
              >
                KATARA
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
