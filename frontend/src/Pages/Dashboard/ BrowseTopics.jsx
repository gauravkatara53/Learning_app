import React, { useState } from "react";
import { Link } from "react-router-dom";
import attend from "../../IMG/attend.jpg";
import corsed from "../../IMG/corsed.jpg";
import pyqd from "../../IMG/pyqd.jpg";
import notesd from "../../IMG/notesd.jpg";

const BrowseTopics = () => {
  const [selectedTab, setSelectedTab] = useState("custom1");

  const renderContent = () => {
    switch (selectedTab) {
      case "custom1":
        return (
          <div className="col-lg-4 col-md-6 col-12 mx-auto mb-4 mb-lg-0 justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Link to="./search/notes" className="block relative">
                <img
                  src="https://img.freepik.com/free-vector/modern-weekly-schedule-template-with-flat-design_23-2147942250.jpg?t=st=1718795728~exp=1718799328~hmac=6e5d75d4e68b3b6f56aedf91d85895ab7a501b8293d2e2f319cef9afab0c2bb4&w=1380"
                  alt="Notes Image"
                  className="h-64 md:h-80 lg:h-96 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h5 className="text-white text-3xl font-black uppercase text-center px-4">
                    NOTES
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        );
      case "custom2":
        return (
          <div className="col-lg-4 col-md-6 col-12 mx-auto mb-4 mb-lg-0">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Link to="./search/pyq" className="block relative">
                <img
                  src="https://img.freepik.com/premium-vector/test-icon-illustration_430232-32.jpg?w=1380"
                  alt="PYQ'S Image"
                  className="h-64 md:h-80 lg:h-96 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h5 className="text-white text-3xl font-black uppercase text-center px-4">
                    PYQ'S
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        );
      case "custom3":
        return (
          <>
            <div className="col-lg-4 col-md-6 col-12 mx-auto mb-4 mb-lg-0">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Link to="./attendance" className="block relative">
                  <img
                    src="https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148553008.jpg?t=st=1718795584~exp=1718799184~hmac=c1316338c071903f7ee299f0fd3b2e16167dce3773b5a35b2f50006e5d125775&w=1380"
                    alt="Attendance Image"
                    className="h-64 md:h-80 lg:h-96 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h5 className="text-white text-3xl font-black uppercase text-center px-4">
                      Attendance
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mx-auto mb-4 mb-lg-0">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Link to="./cg" className="block relative">
                  <img
                    src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1239.jpg?semt=ais_user"
                    alt="Attendance Image"
                    className="h-64 md:h-80 lg:h-96 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h5 className="text-white text-3xl font-black uppercase text-center px-4">
                      CG calculator
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
          </>
        );
      case "custom4":
        return (
          <div className="col-lg-4 col-md-6 col-12 mx-auto mb-4 mb-lg-0">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Link to="./courses" className="block relative">
                <img
                  src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?t=st=1718795643~exp=1718799243~hmac=ef724dff6c9eada52ecf3eae061e2e6442c13b0746c352122f5e29a7b2867a59&w=1380"
                  alt="Courses Image"
                  className="h-64 md:h-80 lg:h-96 w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h5 className="text-white text-3xl font-black uppercase text-center px-4">
                    Courses
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <div className="flex justify-center mb-4">
        <h1 className="text-4xl font-bold">Browse Topics</h1>
      </div>
      <ul className="flex justify-center space-x-4 mb-4">
        <li>
          <button
            className={`px-2 py-2 rounded ${
              selectedTab === "custom1"
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("custom1")}
          >
            NOTES
          </button>
        </li>
        <li>
          <button
            className={`px-4 py-2 rounded ${
              selectedTab === "custom2"
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("custom2")}
          >
            PYQ'S
          </button>
        </li>
        <li>
          <button
            className={`px-2 py-2 rounded ${
              selectedTab === "custom3"
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("custom3")}
          >
            Attend
          </button>
        </li>
        <li>
          <button
            className={`px-4 py-2 rounded ${
              selectedTab === "custom4"
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("custom4")}
          >
            COURSE
          </button>
        </li>
      </ul>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default BrowseTopics;
