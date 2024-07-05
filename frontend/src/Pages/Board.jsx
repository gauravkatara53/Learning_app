import React, { useState, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DrawingBoard = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Load notes from local storage when the component mounts
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    console.log("Loaded notes from local storage:", storedNotes); // Debugging statement
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Save notes to local storage whenever notes state changes
  useEffect(() => {
    console.log("Saving notes to local storage:", notes); // Debugging statement
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    console.log("Adding note:", note); // Debugging statement
    if (note.trim() !== "") {
      if (editIndex !== null) {
        const updatedNotes = notes.map((n, index) =>
          index === editIndex ? note : n
        );
        setNotes(updatedNotes);
        setEditIndex(null);
      } else {
        setNotes([...notes, note]);
      }
      setNote("");
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const editNote = (index) => {
    setNote(notes[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100 pt-8">
        <div className="flex flex-col md:flex-row w-full md:w-3/4">
          <div className="flex-1 bg-white p-4 shadow-md rounded-md mb-4 md:mb-0 md:mr-4">
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
                {editIndex !== null ? "Update" : "Add"}
              </button>
            </div>
            <ul>
              {notes.map((note, index) => (
                <li
                  key={index}
                  className="border-b py-2 flex justify-between items-center"
                >
                  <span>{note}</span>
                  <div>
                    <button
                      onClick={() => editNote(index)}
                      className="p-1 bg-yellow-500 text-white rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteNote(index)}
                      className="p-1 bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 bg-white p-4 shadow-md rounded-md mx-2">
            <h2 className="text-xl font-semibold mb-2">Draw here:</h2>
            <ReactSketchCanvas
              style={{ border: "1px solid #000", borderRadius: "4px" }}
              width="100%"
              height="500px"
              strokeWidth={4}
              strokeColor="#000"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DrawingBoard;
