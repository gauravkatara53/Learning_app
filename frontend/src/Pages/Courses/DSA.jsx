import React from "react";

const DSA = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Data Structures and Algorithms Course
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700">Course Overview</h2>
        <p className="text-gray-600 mt-4">
          This course will cover a variety of topics in Data Structures and
          Algorithms, including arrays, linked lists, trees, graphs, sorting
          algorithms, and more.
        </p>
        <h3 className="text-xl font-bold text-gray-700 mt-6">
          What You'll Learn
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Efficient data organization</li>
          <li>Problem-solving techniques</li>
          <li>Algorithmic thinking</li>
          <li>Complexity analysis</li>
        </ul>
      </div>
    </div>
  );
};

export default DSA;
