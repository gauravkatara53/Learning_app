import React from 'react';
import Navbar from '../Components/Navbar';

const Courses = () => {
  return (
    <div>
        <Navbar></Navbar>
    <section>
      <div className="container mx-auto p-4 my-8">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <a href="#">
                <div className="flex items-center">
                  <div>
                    <h5 className="mb-2 text-3xl font-bold">DSA WITHIN 30 DAYS</h5>
                   
                  </div>
                  <span className="badge bg-blue-500 rounded-full ml-auto">14</span>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zWlYcGsOdzAR7VBnFxZn1PliyLPDQDtP5VrgKNQSoYoLUGYTZ2Y1gtsPmLjsO4wo-gk&usqp=CAU"
                  className="w-full h-auto mt-2 rounded-lg"
                  alt="CSE"
                />
              </a>
              <div className="p-4 flex space-x-2">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            
          >
            Buy
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            
          >
            Add to Cart
          </button>
        </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <a href="/">
                <div className="flex items-center">
                  <div>
                    <h5 className="mb-2 text-3xl font-bold">AI/ML COURSES</h5>
                   
                  </div>
                  <span className="badge bg-blue-500 rounded-full ml-auto">75</span>
                </div>
                <img
                  src="https://image.pbs.org/video-assets/XFRgNfM-asset-mezzanine-16x9-Qo6oLrn.jpg?focalcrop=1200x630x50x10&format=auto"
                  className="w-full h-auto mt-2 rounded-lg"
                  alt="Electrical"
                />
              </a>
              <div className="p-4 flex space-x-2">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            
          >
            Buy
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            
          >
            Add to Cart
          </button>
        </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
                
              <a href="/">
                <div className="flex items-center">
                  <div>
                    <h5 className="mb-2 text-3xl font-bold">WEB DEV</h5>
                    
                  </div>
                  <span className="badge bg-blue-500 rounded-full ml-auto">100</span>
                </div>
                <img
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"
                  className="w-full h-auto mt-2 rounded-lg"
                  alt="Physics"
                />
              </a>
              <div className="p-4 flex space-x-2">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            
          >
            Buy
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            
          >
            Add to Cart
          </button>
        </div>
            </div>
          </div>

          

          
        </div>
      </div>
    </section>
    </div>
  );
};

export default Courses;
