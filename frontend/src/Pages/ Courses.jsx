import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import dsa from "../IMG/dsa.jpeg";
import ml from "../IMG/ml.jpg";
import webdev from "../IMG/webdev.jpg";

const Courses = () => {
  const [coursePurchased, setCoursePurchased] = useState({
    DSA: false,
    AI: false,
    WEB: false,
  });

  // Function to dynamically load the Razorpay script
  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // Function to handle the payment process
  const handlePayment = async (courseName, amount) => {
    const res = await loadRazorpayScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_r0KzTiIrEwf7Qc", // Your Razorpay key ID
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "TPOIC PVT L.T.D",
      description: "Test Transaction",
      handler: function (response) {
        alert("Payment Successful");
        setCoursePurchased((prev) => ({ ...prev, [courseName]: true }));
        // Store purchased courses in local storage
        const purchasedCourses =
          JSON.parse(localStorage.getItem("purchasedCourses")) || {};
        purchasedCourses[courseName] = true;
        localStorage.setItem(
          "purchasedCourses",
          JSON.stringify(purchasedCourses)
        );
      },
      prefill: {
        name: "Your Name",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Your Address",
      },
      theme: {
        color: "#F37254",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

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
                      <h5 className="mb-2 text-3xl font-bold">
                        DSA WITHIN 30 DAYS
                      </h5>
                    </div>
                    <span className="badge bg-blue-500 rounded-full ml-auto">
                      14
                    </span>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zWlYcGsOdzAR7VBnFxZn1PliyLPDQDtP5VrgKNQSoYoLUGYTZ2Y1gtsPmLjsO4wo-gk&usqp=CAU"
                    className="w-full h-auto mt-2 rounded-lg"
                    alt="dsa"
                  />
                </a>
                <div className="p-4 flex space-x-2">
                  {coursePurchased.DSA ? (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View Course
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handlePayment("DSA", 1000)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Buy
                      </button>
                      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <a href="/">
                  <div className="flex items-center">
                    <div>
                      <h5 className="mb-2 text-3xl font-bold">AI/ML COURSES</h5>
                    </div>
                    <span className="badge bg-blue-500 rounded-full ml-auto">
                      75
                    </span>
                  </div>
                  <img
                    src="https://image.pbs.org/video-assets/XFRgNfM-asset-mezzanine-16x9-Qo6oLrn.jpg?focalcrop=1200x630x50x10&format=auto
                   "
                    className="w-full h-auto mt-2 rounded-lg"
                    alt="ml"
                  />
                </a>
                <div className="p-4 flex space-x-2">
                  {coursePurchased.AI ? (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View Course
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handlePayment("AI", 2000)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Buy
                      </button>
                      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <a href="/">
                  <div className="flex items-center">
                    <div>
                      <h5 className="mb-2 text-3xl font-bold">WEB DEV</h5>
                    </div>
                    <span className="badge bg-blue-500 rounded-full ml-auto">
                      100
                    </span>
                  </div>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg"
                    className="w-full h-auto mt-2 rounded-lg"
                    alt="web"
                  />
                </a>
                <div className="p-4 flex space-x-2">
                  {coursePurchased.WEB ? (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View Course
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => handlePayment("WEB", 3000)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Buy
                      </button>
                      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
