import React, { useState } from "react";

const Note = ({ id, text, deleteNote, updateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  return (
    <div className="note">
      <div className="note-body">
        {isEditing ? (
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <p>{text}</p>
        )}
      </div>

      <div className="note_footer">
        {isEditing ? (
          <button
            className="note_save"
            onClick={() => {
              updateNote(id, editText);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="note_save"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}

        <button
          className="note_save"
          onClick={() => deleteNote(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note; 