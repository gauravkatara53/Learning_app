import React from 'react';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  // Retrieve purchased courses from local storage
  const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};

  return (
    <div>
        <Navbar></Navbar>
      <h1 className="text-3xl font-semibold mb-4"></h1>
      <div className="container mx-auto p-4 my-8">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(purchasedCourses).map(([courseName, isPurchased], index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <a href="#">
                  <div className="flex items-center">
                    <div>
                      <h5 className="mb-2 text-3xl font-bold">{courseName}</h5>
                    </div>
                    <span className="badge bg-blue-500 rounded-full ml-auto">New</span>
                  </div>
                  <img
                    src={getImageUrl(courseName)} // Function to get image URL based on course name
                    className="w-full h-auto mt-2 rounded-lg"
                    alt={courseName}
                  />
                </a>
                <div className="p-4 flex space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to get image URL based on course name
const getImageUrl = (courseName) => {
  // Define image URLs for different courses
  const imageUrls = {
    DSA: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zWlYcGsOdzAR7VBnFxZn1PliyLPDQDtP5VrgKNQSoYoLUGYTZ2Y1gtsPmLjsO4wo-gk&usqp=CAU',
    'AI/ML': 'https://image.pbs.org/video-assets/XFRgNfM-asset-mezzanine-16x9-Qo6oLrn.jpg?focalcrop=1200x630x50x10&format=auto',
    'Web Dev': 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg',
  };

  // Return the image URL based on the course name
  return imageUrls[courseName];
};

export default Dashboard;
