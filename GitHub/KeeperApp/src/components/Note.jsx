import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const Note = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: props.title,
    content: props.content,
  });

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSave() {
    props.onEdit(props.id, editedNote);
    setIsEditing(false);
  }

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            name="title"
            value={editedNote.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            value={editedNote.content}
            onChange={handleChange}
          />
          <button onClick={handleSave} aria-label="Save Note">
            <SaveIcon />
          </button>
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleEditClick} aria-label="Edit Note">
            <EditIcon />
          </button>
          <button onClick={handleDelete} aria-label="Delete Note">
            <DeleteIcon />
          </button>
        </>
      )}
    </div>
  );
};

export default Note;
