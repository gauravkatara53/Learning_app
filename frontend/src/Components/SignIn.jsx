import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signin",
        formData
      );
      setToken(response.data.token);
      setError(""); // Clear any previous errors

      // Generate avatar URL based on username
      const avatarUrl = `https://robohash.org/${response.data.user.username}.png`;
      console.log("Generated Avatar URL:", avatarUrl);

      // Store user information in local storage
      const user = { ...response.data.user, avatarUrl };
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Sign In Successful!");

      // Delay navigation for 2 seconds to allow the toast to be visible
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.error);
      setToken(""); // Clear any previous token
    } finally {
      setIsLoading(false);
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
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign In"}
          </button>
          {error && (
            <p className="mt-4 items-center justify-center text-red-500">
              {error}
            </p>
          )}
        </form>
        <p className="mt-6 text-center">
          <Link to="/signup" className="text-blue-500 hover:underline">
            Don't have an account? Sign Up
          </Link>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // Use "colored" theme for consistent styling
      />
    </div>
  );
};

export default SignIn;
