import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    courseName: "",
    amount: 0,
  });

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPurchasedCourses = async (username) => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/purchased-courses/${username}`
        );
        const purchasedCourses = await response.json();
        const updatedCoursePurchased = {
          DSA: purchasedCourses.includes("DSA"),
          AI: purchasedCourses.includes("AI"),
          WEB: purchasedCourses.includes("WEB"),
        };
        setCoursePurchased(updatedCoursePurchased);
      } catch (error) {
        console.error("Error fetching purchased courses:", error);
      }
    };

    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
      setFormData((prevData) => ({
        ...prevData,
        username: userData.username,
        email: userData.email,
      }));

      fetchPurchasedCourses(userData.username);
    }
  }, [navigate]);

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

  const handlePayment = async () => {
    const res = await loadRazorpayScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_r0KzTiIrEwf7Qc",
      amount: formData.amount * 100,
      currency: "INR",
      name: "TPOIC PVT L.T.D",
      description: "Test Transaction",
      handler: async (response) => {
        alert("Payment Successful");
        setCoursePurchased((prev) => ({
          ...prev,
          [formData.courseName]: true,
        }));

        // Update user data in localStorage
        const userData = JSON.parse(localStorage.getItem("user"));
        userData.purchasedCourses = userData.purchasedCourses || [];
        userData.purchasedCourses.push(formData.courseName);
        localStorage.setItem("user", JSON.stringify(userData));

        // Send form data and payment info to server
        await fetch("http://localhost:3000/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            paymentId: response.razorpay_payment_id,
          }),
        });
      },
      prefill: {
        name: formData.username,
        email: formData.email,
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

  const handleBuyClick = (courseName, amount) => {
    setFormData({ ...formData, courseName, amount });
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handlePayment();
    setShowForm(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
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
                        onClick={() => handleBuyClick("DSA", 1000)}
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
                    src="https://image.pbs.org/video-assets/XFRgNfM-asset-mezzanine-16x9-Qo6oLrn.jpg?focalcrop=1200x630x50x10&format=auto"
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
                        onClick={() => handleBuyClick("AI", 2000)}
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
                        onClick={() => handleBuyClick("WEB", 3000)}
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

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg transform transition-all">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Confirm Purchase
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Course Name
                </label>
                <input
                  type="text"
                  value={formData.courseName}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-gray-200"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={formData.amount}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-gray-200"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Proceed to Payment
                </button>
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
