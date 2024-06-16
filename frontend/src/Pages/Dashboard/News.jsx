import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function News() {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
    <div className="bg-gray-900 dark:bg-gray-900 rounded-lg shadow p-4 h-full">
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

export default News;
