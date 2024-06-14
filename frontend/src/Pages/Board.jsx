import React, { useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Navbar from "../Components/Navbar";

const DrawingBoard = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const addNote = () => {
    if (note.trim() !== "") {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  return (
    <>
      <div className="min-h-screen  flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Drawing and Notes Board
        </h1>
        <div className="flex flex-col md:flex-row w-full md:w-3/4">
          <div className="flex-1 bg-white p-4 shadow-md rounded-md mb-4 md:mb-0 md:mr-4">
            <h2 className="text-xl font-semibold mb-2">Draw here:</h2>
            <ReactSketchCanvas
              style={{ border: "1px solid #000", borderRadius: "4px" }}
              width="100%"
              height="500px"
              strokeWidth={4}
              strokeColor="#000"
            />
          </div>
          <div className="flex-1 bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-2">Notes:</h2>
            <div className="flex mb-4">
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="flex-1 p-2 border rounded mr-2"
                placeholder="Write a note..."
              />
              <button
                onClick={addNote}
                className="p-2 bg-blue-500 text-white rounded"
              >
                Add
              </button>
            </div>
            <ul>
              {notes.map((note, index) => (
                <li key={index} className="border-b py-2">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawingBoard;
