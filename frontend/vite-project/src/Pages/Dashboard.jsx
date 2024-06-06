import React from 'react';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  // Retrieve purchased courses from local storage
  const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};

  return (
    <div>
        <Navbar></Navbar>
      
     
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
