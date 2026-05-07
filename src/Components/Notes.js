import { useState, useEffect } from "react";
import CreateNotes from "./CreateNotes";
import "./notes.css";
import { v4 as uuid } from "uuid";
import Note from "./Note";

const Notes = () => {
  const [inputtext, setInputText] = useState("");
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const saveHandler = () => {
    if (inputtext.trim() === "") return;

    const newNote = {
      id: uuid(),
      text: inputtext,
    };

    setNotes([...notes, newNote]);
    setInputText("");
  };
  const deleteNote = (id) => {
    const filtered = notes.filter((note) => note.id !== id);
    setNotes(filtered);
  };

   const updateNote = (id, newText) => {
    const updated = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updated);
  };

  return (
    <div className="notes">
      <CreateNotes
        inputtext={inputtext}
        setInputText={setInputText}
        saveHandler={saveHandler}
      />

      <div className="notes_container">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            deleteNote={deleteNote}
            updateNote={updateNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;