import React, { useState } from "react";

const Pointer = () => {
  const [subjects, setSubjects] = useState([{ marks: "", credits: "" }]);
  const [cg, setCg] = useState(null);

  const handleInputChange = (index, event) => {
    const values = [...subjects];
    values[index][event.target.name] = event.target.value;
    setSubjects(values);
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, { marks: "", credits: "" }]);
  };

  const handleRemoveSubject = (index) => {
    const values = [...subjects];
    values.splice(index, 1);
    setSubjects(values);
  };

  const calculateCg = () => {
    const totalPoints = subjects.reduce((acc, subject) => {
      const gradePoints = getGradePoints(subject.marks);
      return acc + gradePoints * subject.credits;
    }, 0);

    const totalCredits = subjects.reduce(
      (acc, subject) => acc + parseFloat(subject.credits),
      0
    );

    setCg(totalPoints / totalCredits);
  };

  const getGradePoints = (marks) => {
    if (marks >= 90) return 10;
    if (marks >= 80) return 9;
    if (marks >= 70) return 8;
    if (marks >= 60) return 7;
    if (marks >= 50) return 6;
    if (marks >= 40) return 5;
    if (marks >= 35) return 4;
    return 0;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">CG Calculator</h2>
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-4"
          >
            <input
              type="number"
              name="marks"
              value={subject.marks}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Marks"
              className="w-full md:w-1/3 mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              name="credits"
              value={subject.credits}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Credits"
              className="w-full md:w-1/3 mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={() => handleRemoveSubject(index)}
              className="w-full md:w-auto p-2 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSubject}
          className="w-full p-2 mb-4 bg-blue-500 text-white rounded"
        >
          Add Subject
        </button>
        <button
          type="button"
          onClick={calculateCg}
          className="w-full p-2 mb-4 bg-green-500 text-white rounded"
        >
          Calculate CG
        </button>
        {cg !== null && (
          <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
            <h3 className="text-xl font-bold text-center">
              Your CG is: {cg.toFixed(2)}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pointer;
