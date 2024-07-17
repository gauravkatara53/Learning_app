import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import credit from "../IMG/credit.jpg";
import notesimg from "../IMG/notesimg.jpg";
import pyq from "../IMG/pyq.jpg";

const NotePage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                  <h5 className="text-2xl font-bold text-gray-800">NOTES</h5>
                </div>
                <Link to="/search/notes" className="relative block">
                  <img
                    src="https://img.freepik.com/free-vector/woman-checking-giant-check-list_23-2148099800.jpg?t=st=1718806563~exp=1718810163~hmac=933073a03331b440e13bf3944adf81b46696d7777f5dcdddfa5fd6b00cea686b&w=1380"
                    className="w-full  object-cover"
                    alt="notes"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex items-center justify-center">
                    <h5 className="text-3xl font-bold text-white">NOTES</h5>
                  </div>
                  <div className="p-4"></div>
                </Link>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                  <h5 className="text-2xl font-bold text-gray-800">PYQ'S</h5>
                </div>
                <Link to="/search/pyq" className="relative block">
                  <img
                    src="https://img.freepik.com/free-vector/man-getting-award-writing_74855-5891.jpg?t=st=1718808247~exp=1718811847~hmac=53f02d51bf8c71ede5dcb072679bf39a69663d7d026fb996630b0ceef8b24733&w=1380"
                    className="w-full h- object-cover"
                    alt="pyq"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex items-center justify-center">
                    <h5 className="text-3xl font-bold text-white">PYQ'S</h5>
                  </div>
                  <div className="p-4"></div>
                </Link>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                  <h5 className="text-2xl font-bold text-gray-800">CREDITS</h5>
                </div>
                <Link to="/credit" className="relative block">
                  <img
                    src="https://img.freepik.com/free-vector/computer-graphics-advices-tips-watching-digital-design-masterclass-online-course-helpful-information-painting-exam-preparation_335657-3272.jpg?t=st=1718806736~exp=1718810336~hmac=e472b057d76e7b7e99affab5ca5ef90394f32845f9c517326271cfcdce619d02&w=1380"
                    className="w-full  object-cover"
                    alt="Physics"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex items-center justify-center">
                    <h5 className="text-3xl font-bold text-white">CREDITS</h5>
                  </div>
                  <div className="p-4"></div>
                </Link>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                  <h5 className="text-2xl font-bold text-gray-800">
                    CG Calculator
                  </h5>
                </div>
                <Link to="/cg" className="relative block">
                  <img
                    src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1239.jpg?semt=ais_user"
                    className="w-full  object-cover"
                    alt="Physics"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex items-center justify-center">
                    <h5 className="text-3xl font-bold text-white">CG</h5>
                  </div>
                  <div className="p-4"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NotePage;
