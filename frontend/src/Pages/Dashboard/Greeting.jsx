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
    <div className="bg-white px-2 rounded-lg py-2">
      <p className="">{greetingMessage}, User!</p>
    </div>
  );
}

export default Greeting;
