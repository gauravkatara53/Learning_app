import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Greeting() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  let greetingMessage = "";

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Good afternoon";
  } else {
    greetingMessage = "Good evening";
  }

  return (
    <div className="bg-gray-800 dark:bg-gray-900 rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-semibold text-white">Welcome!</h2>
      <p className="text-gray-400">{greetingMessage}, User!</p>
    </div>
  );
}

function News({ newsItems }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Hide the current news item

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true); // Show the next news item after a delay
      }, 1000); // Delay the next news item display for 1 second for smoother transition
    }, 6000); // Change news every 6 seconds

    return () => clearInterval(interval);
  }, [newsItems]);

  return (
    <div className="bg-gray-900 dark:bg-gray-900 rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold text-white mb-2">News 👇</h2>
      <div className="news-container h-40 overflow-hidden relative">
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className={`news-item absolute top-0 left-0 w-full ${
              index === currentIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            } transition-opacity duration-1000`}
          >
            <div className="bg-gray-800 dark:bg-gray-700 rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.content}</p>
              <p className="text-xs text-gray-400 mt-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <Link to="/dashboard" className="text-gray-400 hover:text-blue-500">
          More
        </Link>
      </div>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();

  // Sample news data with more realistic content
  const newsItems = [
    {
      id: 1,
      title: "New Feature Launch!",
      content:
        "Exciting news! We have launched a new feature that allows users to collaborate seamlessly.",
      date: "June 15, 2024",
    },
    {
      id: 2,
      title: "Upcoming Webinar: AI in Education",
      content:
        "Join us for an insightful webinar on the impact of AI in the education sector. Register now!",
      date: "June 18, 2024",
    },
    {
      id: 3,
      title: "Product Update: Improved Dashboard UX",
      content:
        "We've enhanced the user experience of our dashboard with a cleaner interface and faster performance.",
      date: "June 20, 2024",
    },
    {
      id: 4,
      title: "Call for Feedback: New Course Curriculum",
      content:
        "Provide your feedback on the new course curriculum. Your input shapes the future of our offerings.",
      date: "June 22, 2024",
    },
    {
      id: 5,
      title: "Industry Recognition: Best Educational Platform Award",
      content:
        "We're proud to announce that our educational platform has received the Best Educational Platform award.",
      date: "June 25, 2024",
    },
    {
      id: 6,
      title: "New Partnership: Strategic Collaboration with Tech Giants",
      content:
        "We have entered into a strategic collaboration with leading tech giants to enhance our platform's capabilities.",
      date: "June 28, 2024",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <Greeting />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <News newsItems={newsItems} />
        </div>
        <div>
          <div className="bg-gray-900 dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h2 className="text-xl font-semibold text-white mb-2 pb-1">
              Quick Links
            </h2>
            <div className="">
              <ul className="flex flex-col space-y-2 ">
                <li>
                  <Link
                    to="/search/notes"
                    className={`block py-2 px-3 text-gray-300  hover:bg-gray-700 border border-gray-700 rounded-lg p-4  hover:text-blue-500 ${
                      location.pathname === "/search/notes"
                        ? "bg-blue-600  text-white"
                        : ""
                    }`}
                  >
                    Notes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search/pyq"
                    className={`block py-2 px-3 text-gray-300  hover:bg-gray-700 border border-gray-700 rounded-lg p-4 hover:text-blue-500 ${
                      location.pathname === "/search/pyq"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                  >
                    Previous Year Questions (PYQs)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/attendance"
                    className={`block py-2 px-3 text-gray-300 border border-gray-700 rounded-lg p-4  hover:bg-gray-700 hover:text-blue-500 ${
                      location.pathname === "/attendance"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                  >
                    Attendance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/calendar"
                    className={`block py-2 px-3 text-gray-300  border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-blue-500 ${
                      location.pathname === "/calendar"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                  >
                    Events Calendar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/community"
                    className={`block py-2 px-3 text-gray-300  border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-blue-500 ${
                      location.pathname === "/community"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                  >
                    Community Forum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-900 dark:bg-gray-900 rounded-lg shadow p-4 mb-4">
            <h2 className="text-lg font-semibold text-white mb-2">
              Featured Content
            </h2>
            <div className="p-2 border border-gray-700 rounded-lg">
              <p className="text-gray-300">
                Check out our latest webinar on AI in Education and register now
                to secure your spot!
              </p>
              <Link
                to="/webinar"
                className="block mt-2 py-1 px-3 text-blue-500 rounded hover:bg-gray-700 hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
