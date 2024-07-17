import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon from react-icons/fa
import { Link } from "react-router-dom";
const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false); // Hide the alert when the close button is clicked
  };

  return (
    <>
      {showAlert && (
        <div className="relative">
          <div className="flex items-center justify-center text-center bg-gradient-to-tr from-[#246c84] to-[#30789c] text-white px-6 py-3.5 font-[sans-serif] relative">
            <p className="text-base animate-flash mr-4 ">
              ₹500 off with code CKD!
            </p>

            <Link to="/courses">
              <button
                type="button"
                className="bg-white text-blue-500 py-2.5 px-5 rounded text-sm transition-transform duration-300 transform   hover:scale-110 hover:shadow-lg"
                // Call handleClose when the button is clicked
              >
                Explore
              </button>
            </Link>

            <button
              type="button"
              className="text-white hover:text-red-500 transition-colors duration-300 absolute right-4"
              onClick={handleClose} // Close the alert when this button is clicked
            >
              <FaTimes /> {/* Render the cross icon */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
