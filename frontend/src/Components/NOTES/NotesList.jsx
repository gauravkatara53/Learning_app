import React from "react";
import Footer from "../Footer";

const NotesList = ({ notes }) => {
  return (
    <>
      <div className="mx-2">
        <div className="mt-8 bg-white p-4 sm:p-8 rounded-lg shadow-md border border-gray-300">
          {notes.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
                <thead className="bg-gray-100 text-gray-900">
                  <tr>
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
                <tbody className="divide-y divide-gray-200">
                  {notes.map((note, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="py-4 px-2 sm:px-6 text-gray-900 border-r border-gray-300">
                        {note.courseName}
                      </td>
                      <td className="py-4 px-2 sm:px-6 text-gray-900 border-r border-gray-300">
                        {note.term}
                      </td>
                      <td className="py-4 px-2 sm:px-6 text-gray-900 border-r border-gray-300">
                        {note.semester}
                      </td>
                      <td className="py-4 px-2 sm:px-6 text-blue-500">
                        <a
                          href={note.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
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
            <p className="text-gray-900 text-center">
              No notes found. Please try another search.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotesList;
