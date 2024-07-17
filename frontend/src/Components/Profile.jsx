import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    // Retrieve user information from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setAvatarUrl(user.avatarUrl);
    }
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    } else {
      navigate("/signin");
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/"; // This will reload the page and navigate to the root route
  };

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <>
      <div className="flex justify-center items-center mt-20 mx-1">
        <div className="w-full max-w-md p-6 bg-white border border-gray-300 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-6">Profile</h1>
          <div className="flex justify-center mb-6">
            <img
              src={avatarUrl || "default_avatar_url"} // Use a default avatar URL if none is set
              alt="User Icon"
              className="w-24 h-24 md:w-32 md:h-32 outline outline-2 outline-white bg-gray-200 rounded-full" // Adjusted size and outline
              onError={(e) => {
                console.error("Error loading avatar:", e);
                e.target.src = "default_avatar_url"; // Fallback to default avatar
              }}
            />
          </div>
          <div className="mb-4">
            <p className="text-lg">
              <strong>Username:</strong> {user.username}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {user.email}
            </p>
            {/* Add more user details as needed */}
          </div>
          <button
            onClick={handleSignOut}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
