// AcademicCalendar.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { events } from "./events";

function AcademicCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const event = events.find(
        (event) => event.date.toDateString() === date.toDateString()
      );
      const today = new Date();
      if (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear() &&
        event
      ) {
        return "bg-red-500 text-white"; // Red background for current date and event date match
      } else if (event) {
        return "bg-yellow-500 text-white"; // Change background and text color for event dates
      } else if (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      ) {
        return "bg-blue-500 text-white"; // Change background and text color for current date
      }
    }
    return null;
  };

  const onDateClick = (date) => {
    const event = events.find(
      (event) => event.date.toDateString() === date.toDateString()
    );
    setSelectedDate(event);
  };

  // Custom function to style the current date tile
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const today = new Date();
      if (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      ) {
        return (
          <div
            className="current-date"
            style={{ backgroundColor: "#3498db" }}
          ></div>
        );
      }
    }
    return null;
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-100 mb-6">
        Academic Calendar
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <Calendar
          onClickDay={onDateClick}
          tileClassName={tileClassName}
          tileContent={tileContent}
          className="w-full mx-auto"
        />
      </div>

      {selectedDate && (
        <div className="rounded-md my-4  border-l-4 border-yellow-500 bg-yellow-100 p-4">
          <div className="flex items-center justify-between space-x-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-6 w-6"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <div>
              <p className=" font-medium text-lg text-gray-700">
                {selectedDate.title}
              </p>
              <p className="text-sm text-gray-600">
                {selectedDate.description}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AcademicCalendar;
