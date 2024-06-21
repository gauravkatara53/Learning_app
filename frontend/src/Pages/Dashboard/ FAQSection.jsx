import React, { useState } from "react";

const FAQSection = () => {
  // State to manage which FAQ items are open
  const [isOpen, setIsOpen] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  // Function to toggle FAQ item visibility
  const toggleItem = (item) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <section className="mx-auto max-w-7xl  bg-white shadow-lg rounded-lg border-2 border-gray-200 px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Find answers to common questions about accessing notes and question
            papers.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              onClick={() => toggleItem("item1")}
            >
              <span className="flex text-lg font-semibold text-black">
                How do I access study notes?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-5 w-5 text-gray-500 ${
                  isOpen.item1 ? "transform rotate-180" : ""
                }`}
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
            {isOpen.item1 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-500">
                  You can access study notes by logging into your student
                  account. Navigate to the 'Notes' section where you will find
                  categorized notes for various subjects. Click on the desired
                  subject to view and download the notes.
                </p>
              </div>
            )}
          </div>
          <div className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
              onClick={() => toggleItem("item2")}
            >
              <span className="flex text-start text-lg font-semibold text-black">
                How can I find previous question papers?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-5 w-5 text-gray-500 ${
                  isOpen.item2 ? "transform rotate-180" : ""
                }`}
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
            {isOpen.item2 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-500">
                  Finding previous question papers is easy. Simply go to the
                  'Exams' section on our platform. You can search for question
                  papers by entering the year, subject, or exam name in the
                  search bar. Results will display available question papers
                  that you can view and download.
                </p>
              </div>
            )}
          </div>
          <div className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
              onClick={() => toggleItem("item3")}
            >
              <span className="flex text-start text-lg font-semibold text-black">
                What's the best way to prepare for exams using your resources?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-5 w-5 text-gray-500 ${
                  isOpen.item3 ? "transform rotate-180" : ""
                }`}
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
            {isOpen.item3 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-500">
                  Utilize our resources effectively by creating a study plan.
                  Start with reviewing study notes, practicing with previous
                  question papers, and utilizing additional resources such as
                  explanatory videos and quizzes. Stay consistent and focused to
                  maximize your exam preparation.
                </p>
              </div>
            )}
          </div>
        </div>
        <p className="textbase mt-6 text-center text-gray-600">
          Can't find what you're looking for?{" "}
          <a
            href="#"
            title=""
            className="font-semibold text-black hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
