import React from "react";
import Footer from "../Footer";

const PDFList = ({ pdfs }) => {
  return (
    <div className="mx-2">
      <div className="mt-8 p-4 sm:p-8 rounded-lg shadow-md bg-white border border-gray-200">
        {pdfs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg overflow-hidden bg-white text-gray-800 border border-gray-200">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-2 sm:px-4 text-left border-b border-gray-300">
                    Year
                  </th>
                  <th className="py-3 px-2 sm:px-4 text-left border-b border-gray-300">
                    Course Name
                  </th>
                  <th className="py-3 px-2 sm:px-4 text-left border-b border-gray-300">
                    Term
                  </th>
                  <th className="py-3 px-2 sm:px-4 text-left border-b border-gray-300">
                    Semester
                  </th>
                  <th className="py-3 px-2 sm:px-4 text-left border-b border-gray-300">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {pdfs.map((pdf, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-4 px-2 sm:px-6 text-gray-800 border-b border-gray-300">
                      {pdf.year}
                    </td>
                    <td className="py-4 px-2 sm:px-6 text-gray-800 border-b border-gray-300">
                      {pdf.courseName}
                    </td>
                    <td className="py-4 px-2 sm:px-6 text-gray-800 border-b border-gray-300">
                      {pdf.term}
                    </td>
                    <td className="py-4 px-2 sm:px-6 text-gray-800 border-b border-gray-300">
                      {pdf.semester}
                    </td>
                    <td className="py-4 px-2 sm:px-6 border-b border-gray-300">
                      <a
                        href={pdf.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-800">
            No papers found. Please try another search.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PDFList;
