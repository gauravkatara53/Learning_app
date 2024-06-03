import React from 'react';
import Navbar from '../Components/Navbar';

const NotePage = () => {
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
                    <h5 className="mb-2 text-3xl font-bold">NOTES</h5>
                   
                  </div>
                  <span className="badge bg-blue-500 rounded-full ml-auto">14</span>
                </div>
                <img
                  src="https://img.freepik.com/free-vector/script-writing-software-engineering-coding-workshop-code-created-workshop-online-programming-course-apps-games-development-class-concept_335657-818.jpg"
                  className="w-full h-auto mt-2"
                  alt="CSE"
                />
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <a href="/">
                <div className="flex items-center">
                  <div>
                    <h5 className="mb-2 text-3xl font-bold">PYQ'S</h5>
                   
                  </div>
                  <span className="badge bg-blue-500 rounded-full ml-auto">75</span>
                </div>
                <img
                  src="https://img.freepik.com/free-vector/electricity-lighting-flowchart-with-characters-electrical-fitters-with-power-panels-infrastructure-elements_1284-54211.jpg"
                  className="w-full h-auto mt-2"
                  alt="Electrical"
                />
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <a href="/">
                <div className="flex items-center">
                  <div>
                    <h5 className="mb-2 text-3xl font-bold">CREDITS</h5>
                    
                  </div>
                  <span className="badge bg-blue-500 rounded-full ml-auto">100</span>
                </div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/015/881/058/small/flat-isometric-3d-illustration-of-educational-concept-of-rocket-gliding-over-hand-free-vector.jpg"
                  className="w-full h-auto mt-2"
                  alt="Physics"
                />
              </a>
            </div>
          </div>

          

          
        </div>
      </div>
    </section>
    </div>
  );
};

export default NotePage;
