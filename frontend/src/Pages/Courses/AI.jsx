import React from "react";

const AI = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        AI and Machine Learning Course
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700">Course Overview</h2>
        <p className="text-gray-600 mt-4">
          This course will cover foundational and advanced topics in Artificial
          Intelligence and Machine Learning, including neural networks, deep
          learning, supervised and unsupervised learning, and more.
        </p>
        <h3 className="text-xl font-bold text-gray-700 mt-6">
          What You'll Learn
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Understanding of AI concepts</li>
          <li>Machine learning algorithms</li>
          <li>Deep learning applications</li>
          <li>Data handling and processing</li>
        </ul>
      </div>
    </div>
  );
};

export default AI;
