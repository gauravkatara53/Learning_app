// Footer.js

import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Pushes the footer to the bottom */}
      <div className="flex-grow"></div>
      <footer className="bg-gray-900 text-gray-200 p-4 text-center">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        and <code>&lt;/&gt;</code> by KATARA
      </footer>
    </div>
  );
};

export default Footer;
