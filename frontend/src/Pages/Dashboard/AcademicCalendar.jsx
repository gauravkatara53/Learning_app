import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function AcademicCalendar() {
  const events = [
    {
      date: new Date(2024, 4, 25),
      title: "Summer Training/ Summer Break (Except M.Tech, PhD)",
      description: "25.05.2024 to 23.07.2024 (Saturday-Tuesday)",
    },
    {
      date: new Date(2024, 4, 25),
      title: "Summer Vacation for Regular Faculty",
      description: "25.05.2024 to 23.07.2024 (Saturday-Tuesday)",
    },
    {
      date: new Date(2024, 4, 30),
      title:
        "Online Registration for Spring Semester Supplementary Examinations",
      description: "30.05.2024 to 31.05.2024 (Thursday - Friday)",
    },
    {
      date: new Date(2024, 5, 4),
      title: "Supplementary Examinations for Spring Semester",
      description: "04.06.2024 to 10.06.2024 (Tuesday - Monday)",
    },
    {
      date: new Date(2024, 5, 10),
      title:
        "Last date for Completion and Evaluation of M.Tech Thesis for 4th Sem",
      description: "10.06.2024 (Monday)",
    },
    {
      date: new Date(2024, 5, 14),
      title:
        "Last date of Submission of Grades/marks in Samarth for Spring Semester Supplementary Examinations and M.Tech Thesis for 4th Sem",
      description: "14.06.2024 (Friday)",
    },
    {
      date: new Date(2024, 5, 17),
      title:
        "DAC meeting for Spring Semester Supplementary Examinations and M.Tech Thesis for 4th Sem",
      description: "17.06.2024 (Monday)",
    },
    {
      date: new Date(2024, 5, 18),
      title:
        "PGPEC meeting and publications of results for Spring Semester Supplementary Examinations and M.Tech Thesis for 4th Sem",
      description: "18.06.2024 (Tuesday)",
    },
    {
      date: new Date(2024, 6, 8),
      title: "Autumn Semester Fee Payment of all Programs",
      description: "08.07.2024 to 15.07.2024 (Without Late Fee)",
    },
    {
      date: new Date(2024, 6, 16),
      title: "Autumn Semester Fee Payment of all Programs",
      description: "16.07.2024 to 22.07.2024 (With Late Fee)",
    },
    {
      date: new Date(2024, 6, 24),
      title: "Registration for Autumn Semester of all Programs",
      description: "24.07.2024 to 26.07.2024 (Wednesday-Friday)",
    },
    {
      date: new Date(2024, 6, 29),
      title: "Commencement of all classes for Autumn Semester",
      description: "29.07.2024 (Monday)",
    },
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const event = events.find(
        (event) => event.date.toDateString() === date.toDateString()
      );
      const today = new Date();
      const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      if (isToday) {
        return "bg-blue-500 text-white"; // Change background and text color for current date
      } else if (event) {
        return "bg-yellow-500 text-white"; // Change background and text color for event dates
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
    <div>
      <h1 className="text-2xl font-bold text-white mb-4">Academic Calendar</h1>

      <Calendar
        onClickDay={onDateClick}
        tileClassName={tileClassName}
        tileContent={tileContent}
      />

      {selectedDate && (
        <div className="event-details bg-yellow-700 border-4 border-red-100 dark:bg-yellow-700 rounded-lg p-4 mt-4 text-gray-100">
          <h3 className="text-xl font-semibold">{selectedDate.title}</h3>
          <p className="text-gray-300">{selectedDate.description}</p>
        </div>
      )}
    </div>
  );
}

export default AcademicCalendar;
