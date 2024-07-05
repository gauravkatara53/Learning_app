import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const CreditPage = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [isOpen, setIsOpen] = useState({
    firstSem: false,
    secondSem: false,
    thirdSem: false,
    fourthSem: false,
    fifthSem: false,
    sixthSem: false,
    seventhSem: false,
    eighthSem: false,
  });

  const branches = ["CSE", "EE", "MME", "CE", "ME", "ECM", "PIE", "ECE"];

  const courses = {
    firstSem: [
      { name: "Maths", credit: 4 },
      { name: "Electrical", credit: 3 },
      { name: "Engg Chem", credit: 3 },
      { name: "Materials", credit: 3 },
      { name: "CSE", credit: 3 },
      { name: "Environmental Science", credit: 2 },
      { name: "Engineering Drawing", credit: 2 },
      { name: "Electrical Lab", credit: 1 },
      { name: "Chemistry Lab", credit: 1 },
      { name: "CSE Lab", credit: 1 },
    ],
    secondSem: [
      { name: "Physics", credit: 4 },
      { name: "Mechanics", credit: 3 },
      { name: "Engg Math", credit: 3 },
      { name: "Programming", credit: 3 },
      { name: "Electronics", credit: 3 },
      { name: "Communication Skills", credit: 2 },
      { name: "Workshop", credit: 2 },
      { name: "Physics Lab", credit: 1 },
      { name: "Programming Lab", credit: 1 },
      { name: "Electronics Lab", credit: 1 },
    ],
    thirdSem: {
      CSE: [
        // { name: "Data Structures", credit: 4 },
        // { name: "Algorithms", credit: 3 },
        // { name: "Operating Systems", credit: 3 },
        // { name: "Database Systems", credit: 3 },
        // { name: "Computer Networks", credit: 3 },
      ],
      ECE: [
        // { name: "Analog Circuits", credit: 4 },
        // { name: "Digital Circuits", credit: 3 },
        // { name: "Signals and Systems", credit: 3 },
        // { name: "Electromagnetics", credit: 3 },
        // { name: "Microprocessors", credit: 3 },
      ],
    },
    fourthSem: {
      CSE: [
        // { name: "Software Engineering", credit: 4 },
        // { name: "Computer Architecture", credit: 3 },
        // { name: "Theory of Computation", credit: 3 },
        // { name: "Artificial Intelligence", credit: 3 },
        // { name: "Machine Learning", credit: 3 },
      ],
      EE: [
        // { name: "Power Systems", credit: 4 },
        // { name: "Control Systems", credit: 3 },
        // { name: "Electrical Machines", credit: 3 },
        // { name: "Power Electronics", credit: 3 },
        // { name: "Digital Signal Processing", credit: 3 },
      ],
    },
    fifthSem: {
      CSE: [
        // { name: "Web Development", credit: 4 },
        // { name: "Mobile Computing", credit: 3 },
        // { name: "Cloud Computing", credit: 3 },
        // { name: "Big Data", credit: 3 },
        // { name: "Cyber Security", credit: 3 },
      ],
    },
    sixthSem: {
      CSE: [
        // { name: "Advanced Algorithms", credit: 4 },
        // { name: "Distributed Systems", credit: 3 },
        // { name: "Computer Graphics", credit: 3 },
        // { name: "Human-Computer Interaction", credit: 3 },
        // { name: "Natural Language Processing", credit: 3 },
      ],
    },
    seventhSem: {
      CSE: [
        // { name: "Blockchain Technology", credit: 4 },
        // { name: "Quantum Computing", credit: 3 },
        // { name: "IoT", credit: 3 },
        // { name: "Augmented Reality", credit: 3 },
        // { name: "Virtual Reality", credit: 3 },
      ],
    },
    eighthSem: {
      CSE: [
        // { name: "Capstone Project", credit: 8 },
        // { name: "Internship", credit: 4 },
        // { name: "Research Paper", credit: 4 },
      ],
    },
  };

  const handleBranchClick = (branch) => {
    setSelectedBranch(selectedBranch === branch ? null : branch);
  };

  const handleSemesterClick = (semester) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [semester]: !prevState[semester],
    }));
  };

  return (
    <>
      <div className="mt-8 px-2">
        <section className="mx-auto max-w-7xl bg-white shadow-lg rounded-lg border-2 border-gray-200 px-2 py-10 md:px-0">
          <div>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl">
                Credit Page
              </h2>
              <p className="mt-4 max-w-xl text-base text-center leading-relaxed text-gray-600 lg:mx-auto">
                Select your branch and semester to view the courses and their
                credits.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
              {branches.map((branch) => (
                <div key={branch}>
                  <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200 hover:shadow-xl">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-5 sm:p-6 hover:bg-gray-100"
                      onClick={() => handleBranchClick(branch)}
                    >
                      <span className="flex text-lg font-semibold text-black">
                        {branch}
                      </span>
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
                        className={`h-5 w-5 text-gray-500 ${
                          selectedBranch === branch
                            ? "transform rotate-180"
                            : ""
                        }`}
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                    {selectedBranch === branch && (
                      <div className="flex flex-col space-y-4 mb-4">
                        {[
                          "firstSem",
                          "secondSem",
                          "thirdSem",
                          "fourthSem",
                          "fifthSem",
                          "sixthSem",
                          "seventhSem",
                          "eighthSem",
                        ].map((sem) => (
                          <div
                            key={sem}
                            className="mx-4 cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200 hover:shadow-xl"
                          >
                            <button
                              type="button"
                              className="flex w-full items-center justify-between px-4 py-5 sm:p-6 hover:bg-gray-100"
                              onClick={() => handleSemesterClick(sem)}
                            >
                              <span className="flex text-lg font-semibold text-black">
                                {sem === "firstSem"
                                  ? "1st Sem"
                                  : sem === "secondSem"
                                  ? "2nd Sem"
                                  : sem === "thirdSem"
                                  ? "3rd Sem"
                                  : sem === "fourthSem"
                                  ? "4th Sem"
                                  : sem === "fifthSem"
                                  ? "5th Sem"
                                  : sem === "sixthSem"
                                  ? "6th Sem"
                                  : sem === "seventhSem"
                                  ? "7th Sem"
                                  : "8th Sem"}
                              </span>
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
                                className={`h-5 w-5 text-gray-500 ${
                                  isOpen[sem] ? "transform rotate-180" : ""
                                }`}
                              >
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </button>
                            <div
                              className={`overflow-hidden transition-max-height duration-300 ease-out ${
                                isOpen[sem] ? "max-h-screen" : "max-h-0"
                              }`}
                            >
                              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                <table className="min-w-full bg-white">
                                  <thead>
                                    <tr>
                                      <th className="py-2 px-4 border-b">
                                        Course Name
                                      </th>
                                      <th className="py-2 px-4 border-b">
                                        Credit
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Array.isArray(courses[sem])
                                      ? courses[sem].map((course, index) => (
                                          <tr key={index}>
                                            <td className="py-2 px-4 border-b">
                                              {course.name}
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                              {course.credit}
                                            </td>
                                          </tr>
                                        ))
                                      : courses[sem][selectedBranch]?.map(
                                          (course, index) => (
                                            <tr key={index}>
                                              <td className="py-2 px-4 border-b">
                                                {course.name}
                                              </td>
                                              <td className="py-2 px-4 border-b">
                                                {course.credit}
                                              </td>
                                            </tr>
                                          )
                                        )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CreditPage;
