import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post(`http://localhost:3000/api/contact`, formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // Hide the success message after 3 seconds

  setTimeout(() => {
    setSubmitted(false);
  }, 30000);

  return (
    <div className="mt-12 mx-2">
      <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
        <div>
          <h1 className="text-gray-800 text-3xl text-center font-extrabold">
            Contact us
          </h1>
          <p className="text-md text-center text-gray-500 mt-4">
            "Reach out to us today—we're here to listen and assist you with any
            questions or concerns you may have."
          </p>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:info@example.com"
                  className="text-[#007bff] text-sm ml-4"
                >
                  <small className="block">Mail</small>
                  <strong>gauravkatara53@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>

            <ul className="flex mt-4 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 511 512"
                  >
                    <path
                      d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V321.5c0-23.949 6.656-46.262 17.805-62.062 11.148-15.805 26.719-24.438 44.793-24.438 37.019 0 52.602 30.512 52.602 77v184c0 8.285 6.719 15 15 15h96.398c8.285 0 15-6.715 15-15V298.098c0-75.527-15.434-134.156-90.293-134.156zm59.598 317.188H431.5v-169c0-30.348-6.684-54.512-19.914-71.016-13.266-16.551-32.094-25.312-56.084-25.312-27.597 0-51.355 13.164-68.414 37.715-17.07 24.582-26.59 58.324-26.59 94.582V482h-66.398V190.664h66.398v15.906c.422 7.696 6.777 13.812 14.484 14.578 7.648.75 14.824-4.523 16.477-11.934 20.523-10.84 42.934-16.448 65.973-16.448 46.578 0 75.484 18.03 92.922 56.844 9.77 21.992 13.273 47.633 13.273 76.689z"
                      data-original="#000000"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          {submitted && (
            <div
              className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-4"
              role="alert"
            >
              <p className="font-semibold">Form submitted successfully!</p>
            </div>
          )}
          <form
            className="flex flex-col space-y-4 text-[#555]"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control w-full border border-solid border-[#e0e0e0] text-base px-4 py-2 focus:outline-none focus:border-[#3eb8f1] rounded-[5px]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control w-full border border-solid border-[#e0e0e0] text-base px-4 py-2 focus:outline-none focus:border-[#3eb8f1] rounded-[5px]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control w-full h-40 border border-solid border-[#e0e0e0] text-base px-4 py-2 focus:outline-none focus:border-[#3eb8f1] rounded-[5px]"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="self-start bg-[#007bff] text-white text-sm py-3 px-8 border border-solid border-[#007bff] rounded-md transition-all duration-300 ease-linear hover:bg-transparent hover:text-[#007bff]"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
