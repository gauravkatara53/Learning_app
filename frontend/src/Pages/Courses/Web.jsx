// src/components/WebDevCourse.js
import React from "react";

const Web = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Web Development Course
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-700">Course Overview</h2>
        <p className="text-gray-600 mt-4">
          Learn all about modern web development, from HTML, CSS, and JavaScript
          to advanced frameworks like React and Node.js.
        </p>
        <h3 className="text-xl font-bold text-gray-700 mt-6">
          What You'll Learn
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Front-end technologies</li>
          <li>Back-end development</li>
          <li>Full-stack applications</li>
          <li>Responsive design principles</li>
        </ul>
      </div>
    </div>
  );
};

export default Web;
