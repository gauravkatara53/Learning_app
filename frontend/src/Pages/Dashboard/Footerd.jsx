import React from "react";
import mortarboard from "../../assets/mortarboard.png";
import { Link } from "react-router-dom";

const Footerd = () => {
  return (
    <footer className="relative overflow-hidden py-10 bg-gray-100">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <img src={mortarboard} className="h-10" alt="" />
                <span className="ml-4 text-lg font-bold">TOPIC</span>
              </div>
              <div>
                <div className="flex">
                  <p className="mb-4 text-base font-medium">CODE BY &nbsp;</p>
                  <p className="font-bold text-blue-400">KATARA</p>
                </div>

                <p className="text-sm text-gray-600">
                  © Copyright 2024. All Rights Reserved by TOPIC.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    to="/profile"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/contact"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/contact"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerd;
