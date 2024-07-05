import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signin",
        formData
      );
      setToken(response.data.token);
      setError(""); // Clear any previous errors

      // Generate avatar URL based on username
      const avatarUrl = `https://robohash.org/${response.data.user.username}.png`;
      console.log("Generated Avatar URL:", avatarUrl); // Log the URL

      // Store user information in local storage
      const user = { ...response.data.user, avatarUrl };
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to the dashboard or another page
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setToken(""); // Clear any previous token
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if (token) {
      const timer = setTimeout(() => {
        setToken("");
      }, 3000);
      return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </div>
            ) : (
              "Sign In"
            )}
          </button>
          {error && (
            <p className="mt-4 items-center justify-center text-red-500">
              {error}
            </p>
          )}
          {token && (
            <p className="w-full text-center bg-green-500 text-white py-2 my-2 rounded-sm ">
              Sign In Successful!
            </p>
          )}
        </form>
        <p className="mt-6 text-center">
          <Link to="/signup" className="text-blue-500 hover:underline">
            Don't have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
