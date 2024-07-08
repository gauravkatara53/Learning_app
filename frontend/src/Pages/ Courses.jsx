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
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
      setFormData((prevData) => ({
        ...prevData,
        username: userData.username,
        email: userData.email,
      }));

      // Update coursePurchased state based on user's purchased courses
      const purchasedCourses = userData.purchasedCourses || [];
      const updatedCoursePurchased = {
        DSA: purchasedCourses.includes("DSA"),
        AI: purchasedCourses.includes("AI"),
        WEB: purchasedCourses.includes("WEB"),
      };
      setCoursePurchased(updatedCoursePurchased);
    } else {
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
          <div className="bg-white p-8 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-700"
              onClick={handleCloseForm}
              style={{ fontSize: "2rem" }} // Adjust the size as needed
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4">Enter Your Details</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.username}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Course</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.courseName}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Amount</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.amount}
                  readOnly
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Pay
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Courses;
