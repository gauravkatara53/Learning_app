import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function News() {
  const newsItems = [
    {
      id: 1,
      title: "Off-Campus Hiring Up (June)",
      content:
        "Skills focus leads to more off-campus opportunities. Don't just rely on college placements, explore job boards and networking events to find your perfect fit.",
      date: "June '24",
      link: "/news/off-campus-hiring-up-june",
    },
    {
      id: 2,
      title: "TCS Hiring Engineers (June)",
      content:
        "Good news for engineering grads! TCS is actively recruiting, but many other companies are too. Research companies and tailor your resume for each application.",
      date: "June '24",
      link: "/news/tcs-hiring-engineers-june",
    },
    {
      id: 3,
      title: "Top Colleges: 100% Placement (June)",
      content:
        "Some colleges see impressive results. While your college's placement record is a factor, remember strong skills and a proactive approach are key to landing your dream job.",
      date: "June '24",
      link: "/news/top-colleges-placement-june",
    },
    {
      id: 4,
      title: "Niche Fields on Rise (June)",
      content:
        "Explore emerging programs with industry demand. Research salary trends and job outlook before choosing a niche field to ensure it aligns with your long-term goals.",
      date: "June '24",
      link: "/news/niche-fields-rise-june",
    },
    {
      id: 5,
      title: "Start-Up Focus (June)",
      content:
        "Many companies, like IIT Madras, report a surge in placements with startups. Consider connecting with incubators or attending startup job fairs. Startups offer exciting opportunities but may have different work cultures. Research the company well before applying.",
      date: "June '24",
      link: "/news/start-up-focus-june",
    },
    {
      id: 6,
      title: "International Opportunities (June)",
      content:
        "News like IIT Madras placements show a rise in international offers. Explore programs that enhance global skills. Consider learning a new language or participating in international exchange programs to boost your resume for global opportunities.",
      date: "June '24",
      link: "/news/international-opportunities-june",
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
    }, 3000); // Change news every 6 seconds

    return () => clearInterval(interval);
  }, [newsItems]);

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-gray-100 mb-6">NEWS</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="news-container h-56 overflow-hidden relative">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`news-item absolute top-0 left-0 w-full transition-all duration-1000 ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
            >
              {/* <a href={item.link}> */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-gray-700 mb-4">{item.content}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
              {/* </a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
