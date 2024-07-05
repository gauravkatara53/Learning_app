import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import mortarboard from "./mortarboard.png"; // Ensure this path is correct based on your file structure
import userIcon from "./user_149071.png"; // Add the path to your user icon

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    // Retrieve user information from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUsername(user.username);
      setAvatarUrl(user.avatarUrl);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSignOut = () => {
    // Clear user information from local storage
    localStorage.removeItem("user");
    setUsername("");
    setAvatarUrl("");
    // Redirect to the home page or login page
    navigate("/");
  };

  const handleProfileClick = () => {
    if (username) {
      navigate("/profile");
    } else {
      navigate("/signin");
    }
  };

  const handleSignOutAndCloseMenu = () => {
    handleSignOut();
    closeMenu();
  };

  return (
    <>
      <nav className="bg-[#81d0c7] border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={mortarboard} className="h-10" alt="Logo" />
            <span className="self-center text-3xl font-bold whitespace-nowrap text-gray-800">
              Topic
            </span>
          </Link>
          <div className="flex md:order-2 items-center space-x-4">
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={toggleMenu}
            >
              <span className="sr-only">User menu</span>
              <img
                src={avatarUrl || userIcon} // Use a default avatar URL if none is set
                alt="User Icon"
                className="w-6 h-6 md:w-8 md:h-8 outline outline-2 outline-white bg-gray-200 rounded-full" // Add outline class here
                onClick={handleProfileClick} // Add click handler here
                onError={(e) => {
                  console.error("Error loading avatar:", e);
                  e.target.src = "default_avatar_url"; // Fallback to default avatar
                }}
              />
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            <div className="hidden md:flex items-center">
              <img
                src={avatarUrl || userIcon} // Use a default avatar URL if none is set
                alt="User Icon"
                className="w-10 h-10 rounded-full cursor-pointer outline outline-2 outline-white bg-gray-200" // Add outline class here
                onClick={handleProfileClick}
                onError={(e) => {
                  console.error("Error loading avatar:", e);
                  e.target.src = "default_avatar_url"; // Fallback to default avatar
                }}
              />
              {username && (
                <>
                  <span className="ml-2 bg-white mx-3 rounded-md text-gray-800 px-3">
                    Hello, {username}
                  </span>
                </>
              )}
            </div>
          </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul
              className={`flex ${
                isOpen ? "flex-col" : "flex-row"
              } p-4 md:p-0 mt-4 font-medium border border-gray-200 rounded-lg ${
                isOpen ? "bg-[#81d0c7]" : "bg-gray-50"
              } md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#81d0c7]`}
            >
              {username && (
                <li className="md:hidden flex items-center space-x-2">
                  <span className="block my-3 py-2 px-3 text-gray-800 rounded bg-white ">
                    Hello, {username}
                  </span>
                </li>
              )}
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 md:py-2 md:px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 ${
                    location.pathname === "/"
                      ? "md:text-blue-500 bg-gray-100"
                      : ""
                  }`}
                  aria-current={location.pathname === "/" ? "page" : undefined}
                  onClick={closeMenu}
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/academic"
                  className={`block py-2 px-3 md:py-2 md:px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 ${
                    location.pathname === "/academic"
                      ? "md:text-blue-500 bg-gray-100"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  Academic
                </Link>
              </li>

              <li>
                <Link
                  to="/attendance"
                  className={`block py-2 px-3 md:py-2 md:px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 ${
                    location.pathname === "/attendance"
                      ? "md:text-blue-500 bg-gray-100"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  Attendance
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className={`block py-2 px-3 md:py-2 md:px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 ${
                    location.pathname === "/courses"
                      ? "md:text-blue-500 bg-gray-100"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className={`block py-2 px-3 md:py-2 md:px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 ${
                    location.pathname === "/community"
                      ? "md:text-blue-500 bg-gray-100"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block py-2 px-3 md:py-2 md:px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 ${
                    location.pathname === "/contact"
                      ? "md:text-blue-500 bg-gray-100"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
