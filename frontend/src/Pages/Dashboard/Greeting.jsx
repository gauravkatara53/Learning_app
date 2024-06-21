import React, { useEffect, useState } from "react";

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

  const [systemDarkMode, setSystemDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDarkMode(mediaQuery.matches);

    const handleChange = (e) => setSystemDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const currentTheme = systemDarkMode ? "dark" : "light";

  return (
    <div
      className={`bg-${
        currentTheme === "dark" ? "gray-900" : "gray-200"
      } rounded-lg p-4 mb-4`}
    >
      <h2
        className={`text-2xl font-semibold ${
          currentTheme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        Welcome!
      </h2>
      <p
        className={`text-${currentTheme === "dark" ? "gray-300" : "gray-400"}`}
      >
        {greetingMessage}, User!
      </p>
    </div>
  );
}

export default Greeting;
