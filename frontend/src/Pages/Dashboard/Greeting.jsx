import React from "react";

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

export default Greeting;
