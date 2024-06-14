import React from "react";

const NotesList = ({ notes }) => {
  return (
    <>
      <div className="mx-2">
        <div className="mt-8 bg-gray-900 p-4 sm:p-8 rounded-lg shadow-md">
          {notes.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gray-700 text-white">
                  <tr>
                    <th className="py-3 px-2 sm:px-4 text-left">Course Name</th>
                    <th className="py-3 px-2 sm:px-4 text-left">Term</th>
                    <th className="py-3 px-2 sm:px-4 text-left">Semester</th>
                    <th className="py-3 px-2 sm:px-4 text-left">Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {notes.map((note, index) => (
                    <tr key={index} className="hover:bg-gray-700">
                      <td className="py-4 px-2 sm:px-6 text-white">
                        {note.courseName}
                      </td>
                      <td className="py-4 px-2 sm:px-6 text-white">
                        {note.term}
                      </td>
                      <td className="py-4 px-2 sm:px-6 text-white">
                        {note.semester}
                      </td>
                      <td className="py-4 px-2 sm:px-6 text-white">
                        <a
                          href={note.pdfUrl}
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
            <p className="text-white text-center">
              No notes found. Please try another search.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default NotesList;
